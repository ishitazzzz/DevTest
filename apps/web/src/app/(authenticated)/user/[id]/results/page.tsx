'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Avatar, Space } from 'antd'
import {
  UserOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UserResultsPage() {
  const { userId } = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [userTests, setUserTests] = useState([])

  useEffect(() => {
    const fetchUserTests = async () => {
      try {
        const tests = await Api.Test.findManyByUserId(userId, {
          includes: [
            'testQuestions',
            'testQuestions.question',
            'testQuestions.answers',
            'testQuestions.answers.selectedOption',
          ],
        })
        setUserTests(tests)
      } catch (error) {
        enqueueSnackbar('Failed to fetch test results', { variant: 'error' })
      }
    }

    if (userId) {
      fetchUserTests()
    }
  }, [userId])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Test Results</Title>
      <Text>Here you can find the detailed results of your tests.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {userTests?.map((test, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={`Test #${index + 1}`}
              actions={[
                <Space>
                  <Avatar size="small" icon={<UserOutlined />} />
                  <Text>{dayjs(test.dateCreated).format('DD/MM/YYYY')}</Text>
                </Space>,
              ]}
            >
              <p>Score: {test.score}</p>
              <p>
                Completion Time: {dayjs(test.completionTime).format('HH:mm:ss')}
              </p>
              {test.testQuestions?.map((question, qIndex) => (
                <div key={qIndex}>
                  <Text strong>{question.question?.text}</Text>
                  {question.answers?.map((answer, aIndex) => (
                    <div key={aIndex}>
                      <Text>{answer.selectedOption?.text}</Text>
                      {answer.selectedOption?.isCorrect ? (
                        <CheckCircleTwoTone twoToneColor="#52c41a" />
                      ) : (
                        <CloseCircleTwoTone twoToneColor="#eb2f96" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
