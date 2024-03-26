'use client'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Radio, Row, Typography, Modal } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TestPage() {
  const [questions, setQuestions] = useState([
    {
      text: "What is the correct syntax for a React functional component?",
      options: [
        { id: '1', text: "function Component() {}", isCorrect: false },
        { id: '2', text: "const Component = function() {}", isCorrect: false },
        { id: '3', text: "const Component = () => {}", isCorrect: true },
      ],
    },
    {
      text: "Which hook is used to manage state in a functional component?",
      options: [
        { id: '1', text: "useState", isCorrect: true },
        { id: '2', text: "useEffect", isCorrect: false },
        { id: '3', text: "useContext", isCorrect: false },
      ],
    },
    {
      text: "How do you pass props in React?",
      options: [
        { id: '1', text: "<Component propsName='value' />", isCorrect: true },
        { id: '2', text: "<Component => propsName='value' />", isCorrect: false },
        { id: '3', text: "<Component: propsName='value' />", isCorrect: false },
      ],
    },
    {
      text: "What is the use of useEffect hook in React?",
      options: [
        { id: '1', text: "To manage state", isCorrect: false },
        { id: '2', text: "To perform side effects in function components", isCorrect: true },
        { id: '3', text: "To create context", isCorrect: false },
      ],
    },
    // Newly added questions
    {
      text: "What is React?",
      options: [
        { id: '1', text: "A server-side framework", isCorrect: false },
        { id: '2', text: "A database", isCorrect: false },
        { id: '3', text: "A JavaScript library for building user interfaces", isCorrect: true },
      ],
    },
    {
      text: "JSX?",
      options: [
        { id: '1', text: "A syntax extension for JavaScript", isCorrect: true },
        { id: '2', text: "A CSS framework", isCorrect: false },
        { id: '3', text: "A new programming language", isCorrect: false },
      ],
    },
    {
      text: "In React, props are___?",
      options: [
        { id: '1', text: "Internal state", isCorrect: false },
        { id: '2', text: "Read-only components", isCorrect: true },
        { id: '3', text: "External libraries", isCorrect: false },
      ],
    },
    {
      text: "What is the virtual DOM in React?",
      options: [
        { id: '1', text: "A real DOM representation", isCorrect: false },
        { id: '2', text: "A memory reconciliation algorithm", isCorrect: true },
        { id: '3', text: "A type of database", isCorrect: false },
      ],
    },
  ])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState({})
  const [isTestSubmitted, setIsTestSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  const handleOptionChange = (e) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestionIndex]: e.target.value,
    })
  }

  const handleSubmitTest = async () => {
    const correctAnswers = questions.reduce((acc, question, index) => {
      if (question.options.find(option => option.isCorrect && option.id === selectedOptions[index])) {
        return acc + 1
      }
      return acc
    }, 0)

    const finalScore = (correctAnswers / questions.length) * 100
    setScore(finalScore)
    setIsTestSubmitted(true)

    Modal.info({
      title: 'Test Result',
      content: (
        <div>
          <p>Your score is: {finalScore}%</p>
          {finalScore > 50 ? (
            <p><CheckCircleOutlined style={{ color: 'green' }} /> Congratulations! You passed the test.</p>
          ) : (
            <p><CloseCircleOutlined style={{ color: 'red' }} /> Unfortunately, you did not pass. Please try again.</p>
          )}
        </div>
      ),
      onOk() {},
    });

    if (finalScore > 50) {
      await Api.User.updateOne(userId, { status: 'verified developer' })
      enqueueSnackbar('Congratulations! You are now a verified developer.', { variant: 'success' })
      router.push(`/user/${userId}/results`)
    } else {
      enqueueSnackbar('Your score is below the passing criteria. Please try again.', { variant: 'info' })
    }
  }

  return (
    <Row justify="center" style={{ marginTop: '20px' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        {!isTestSubmitted ? (
          <>
            <Title level={2}>Question {currentQuestionIndex + 1}</Title>
            <Card>
              <Paragraph>{questions[currentQuestionIndex]?.text}</Paragraph>
              <Radio.Group onChange={handleOptionChange} value={selectedOptions[currentQuestionIndex]}>
                {questions[currentQuestionIndex]?.options?.map((option) => (
                  <Radio key={option.id} value={option.id}>
                    {option.text}
                  </Radio>
                ))}
              </Radio.Group>
            </Card>
            <Row justify="space-between" style={{ marginTop: '20px' }}>
              <Button
                disabled={currentQuestionIndex <= 0}
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
              >
                Previous
              </Button>
              {currentQuestionIndex < questions.length - 1 ? (
                <Button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Next</Button>
              ) : (
                <Button type="primary" onClick={handleSubmitTest}>Submit Test</Button>
              )}
            </Row>
          </>
        ) : null}
      </Col>
    </Row>
  )
}