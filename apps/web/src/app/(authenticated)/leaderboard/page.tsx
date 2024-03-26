'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Table, Avatar, Space, Tag } from 'antd'
import { TrophyOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
interface LeaderboardEntry {
  key: string
  rank: number
  name: string
  score: number
  pictureUrl?: string
  status?: string
  verified?: boolean // Updated to include the verified property
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function LeaderboardPage() {
  const { isAuthenticated } = useAuthentication()

  const [leaderboards, setLeaderboards] = useState<LeaderboardEntry[]>([])

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const leaderboardsFound = await Api.Leaderboard.findMany({
          includes: ['user', 'user.status'], // Modified to include user.status
        })
        const leaderboardEntries: LeaderboardEntry[] = leaderboardsFound.map(
          (leaderboard) => ({
            key: leaderboard.id,
            rank: leaderboard.rank,
            name: leaderboard.user?.name || 'Anonymous',
            score: leaderboard.score,
            pictureUrl: leaderboard.user?.pictureUrl,
            status: leaderboard.user?.status,
            verified: leaderboard.user?.status === 'Verified Developer', // Check and set the verified property
          }),
        )

        leaderboardEntries.sort((a, b) => b.score - a.score)

        setLeaderboards(leaderboardEntries)
      } catch (error) {
        console.error('Failed to fetch leaderboards', error)
      }
    }

    if (isAuthenticated) {
      fetchLeaderboards()
    }
  }, [isAuthenticated])

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      responsive: ['sm'],
      render: (text: string) => (
        <Text>
          <TrophyOutlined /> {text}
        </Text>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      responsive: ['xs'],
      render: (text: string, record: LeaderboardEntry) => (
        <Space>
          {record.pictureUrl ? (
            <Avatar src={record.pictureUrl} />
          ) : (
            <Avatar>{text.charAt(0)}</Avatar>
          )}
          {text}
          {record.verified && <Tag color="green">Verified Developer</Tag>} // Conditionally render the tag
        </Space>
      ),
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      responsive: ['sm'],
    },
  ]

  return (
    <div>
      <Title level={2}>Top Scores and Rankings</Title>
      <Text>See who's leading in the DevTest challenge.</Text>
      <Table dataSource={leaderboards} columns={columns} pagination={false} />
    </div>
  )
}