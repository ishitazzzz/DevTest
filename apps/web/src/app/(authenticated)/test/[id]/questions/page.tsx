'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Button, Radio, Space, Card } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TestQuestionsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  useEffect(() => {
    const fetchTestQuestions = async () => {
      try {
        const testQuestions = await Api.TestQuestion.findManyByTestId(
          params.id,
          {
            includes: ['question', 'question.options'],
          },
        )
        setQuestions(testQuestions.map(tq => tq.question))
      } catch (error) {
        enqueueSnackbar('Failed to fetch questions', { variant: 'error' })
      }
    }

    fetchTestQuestions()
  }, [params.id])

  const handleOptionChange = e => {
    setSelectedOption(e.target.value)
  }

  const submitAnswer = async () => {
    if (!selectedOption) {
      enqueueSnackbar('Please select an option before proceeding', {
        variant: 'info',
      })
      return
    }
    try {
      await Api.Answer.createOneByTestQuestionId(
        questions[currentQuestionIndex].id,
        {
          selectedOptionId: selectedOption,
        },
      )
      enqueueSnackbar('Answer submitted successfully', { variant: 'success' })
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedOption(null)
      } else {
        router.push(`/test/${params.id}/complete`)
      }
    } catch (error) {
      enqueueSnackbar('Failed to submit answer', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title>Test Questions</Title>
      <Text>Answer the questions below to complete the test.</Text>
      {questions.length > 0 && (
        <Card
          title={`Question ${currentQuestionIndex + 1} of ${questions.length}`}
          style={{ marginTop: 20 }}
        >
          <Text>{questions[currentQuestionIndex]?.text}</Text>
          <Radio.Group
            onChange={handleOptionChange}
            value={selectedOption}
            style={{ display: 'block', marginTop: 20 }}
          >
            <Space direction="vertical">
              {questions[currentQuestionIndex]?.options?.map(option => (
                <Radio key={option.id} value={option.id}>
                  {option.text}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
          <Button
            type="primary"
            onClick={submitAnswer}
            style={{ marginTop: 20 }}
          >
            Submit Answer
          </Button>
        </Card>
      )}
    </PageLayout>
  )
}
