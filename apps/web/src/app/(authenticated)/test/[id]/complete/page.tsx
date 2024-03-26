'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, List, Avatar } from 'antd'
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
const { Title, Text } = Typography
interface Option {
  id: string
  text: string
  isCorrect: boolean
}
interface Answer {
  id: string
  selectedOption?: Option
}
interface Question {
  id: string
  text: string
}
interface TestQuestion {
  id: string
  question?: Question
  answers?: Answer[]
}
interface Test {
  id: string
  score: number
  dateCreated: string
  testQuestions?: TestQuestion[]
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TestCompletionPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [testResults, setTestResults] = useState<Test[]>([])

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to view this page', {
        variant: 'error',
      })
      return
    }

    const fetchTestResults = async () => {
      try {
        const tests = await Api.Test.findManyByUserId(userId, {
          includes: [
            'testQuestions',
            'testQuestions.question',
            'testQuestions.answers',
            'testQuestions.answers.selectedOption',
          ],
        })
        setTestResults(tests)
      } catch (error) {
        enqueueSnackbar('Failed to fetch test results', { variant: 'error' })
      }
    }

    fetchTestResults()
  }, [userId, router])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Test Results</Title>
      <Text>
        Here are your test results including scores and a summary of your
        answers.
      </Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {testResults.map(test => (
          <Col span={24} key={test.id}>
            <Card
              title={`Test Completed on ${dayjs(test.dateCreated).format('MMMM D, YYYY')}`}
            >
              <List
                itemLayout="horizontal"
                dataSource={test.testQuestions}
                renderItem={question => (
                  <List.Item key={question.id}>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          icon={
                            question.answers?.[0]?.selectedOption?.isCorrect ? (
                              <CheckCircleTwoTone twoToneColor="#52c41a" />
                            ) : (
                              <CloseCircleTwoTone twoToneColor="#eb2f96" />
                            )
                          }
                        />
                      }
                      title={<Text>{question.question?.text}</Text>}
                      description={question.answers?.map((answer, index) => (
                        <Text key={index}>{answer.selectedOption?.text}</Text>
                      ))}
                    />
                  </List.Item>
                )}
              />
              <Text strong>Score: {test.score}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
