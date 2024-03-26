import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('f93f68c3-8230-4d43-8af8-0796f85287c9', '7Russel4@yahoo.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=9', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8107a956-5be2-4101-b109-b5415221a763', '13Lucienne3@hotmail.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=15', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('10b8f46f-acac-4195-b298-77595a143d8a', '19Gabriella53@yahoo.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('7141cf60-7b0d-4f70-81cf-fee194d2bac3', '25Retha_OReilly55@gmail.com', 'Dana Lee', 'https://i.imgur.com/YfJQV5z.png?id=27', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('771e6ee2-1c3d-442f-83a1-197c32bc30b8', '31Imogene97@gmail.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=33', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cd643ffc-7de3-4e3c-bf58-e02b2d15ca15', '37Bette_Kozey30@hotmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=39', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d010c303-c949-48f7-ba3b-2c1542f3bc26', '43Marianna54@hotmail.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=45', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('4e01d2f4-2e5f-4907-9101-93f7079db436', '49Hilma24@hotmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('013bc2fd-e097-4dda-b1c3-05ea9f3cc167', '55Enrique2@gmail.com', 'Evan Patel', 'https://i.imgur.com/YfJQV5z.png?id=57', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f1a5941f-68ef-4b5a-82ab-3ec6f610f788', 'Challenge a Friend', 'We value your input Please take a moment to provide feedback on your test experience.', 'Leaderboard Bot', '64Hollis.Conroy@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '013bc2fd-e097-4dda-b1c3-05ea9f3cc167');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9e15bf65-b562-40a1-980d-0367a5e07d35', 'New High Score', 'Youve achieved a new high score Check the leaderboard to see your ranking.', 'Challenge Bot', '71Ruben.Collier@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '013bc2fd-e097-4dda-b1c3-05ea9f3cc167');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('bb32b226-7116-40dc-b825-2911aae2d82e', 'New High Score', 'We value your input Please take a moment to provide feedback on your test experience.', 'Challenge Bot', '78Candido.Stehr99@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', 'cd643ffc-7de3-4e3c-bf58-e02b2d15ca15');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('cbb62ca0-3bd9-4718-aedd-61d4b4186771', 'Test Completed', 'We value your input Please take a moment to provide feedback on your test experience.', 'Admin', '85Aurelio7@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5ab5ecf2-d58a-4a16-82c2-c8f34bfbc411', 'New High Score', 'Thank you for joining DevTest. Start your first test today', 'Leaderboard Bot', '92Alene_Hayes@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '10b8f46f-acac-4195-b298-77595a143d8a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b2009083-7ad8-4e4a-acc9-d1f639ca7d3f', 'Challenge a Friend', 'Congratulations on completing your test View your results now.', 'Leaderboard Bot', '99Summer.Marks@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '771e6ee2-1c3d-442f-83a1-197c32bc30b8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('903fd0a3-7e40-443a-96b7-5637503f0a47', 'Feedback Requested', 'Congratulations on completing your test View your results now.', 'Challenge Bot', '106Andre_Kunde58@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'd010c303-c949-48f7-ba3b-2c1542f3bc26');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('eb67b30c-b0da-4289-b31f-0ab6faf8c1c8', 'Test Completed', 'Congratulations on completing your test View your results now.', 'Challenge Bot', '113Braden81@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '7141cf60-7b0d-4f70-81cf-fee194d2bac3');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e22aeb5c-9159-420d-91e6-97ebd21021f2', 'Welcome to DevTest', 'We value your input Please take a moment to provide feedback on your test experience.', 'User Feedback', '120Rashad_Gottlieb@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', 'd010c303-c949-48f7-ba3b-2c1542f3bc26');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('95ea47a8-c779-412f-97fc-3063aa30816d', 'Welcome to DevTest', 'Thank you for joining DevTest. Start your first test today', 'Challenge Bot', '127Lourdes_Littel@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '8107a956-5be2-4101-b109-b5415221a763');

INSERT INTO "question" ("id", "text", "type") VALUES ('06d5699b-536c-4d23-8a67-64d8465284a0', 'Explain the difference between  and  in JavaScript.', 'longanswer');
INSERT INTO "question" ("id", "text", "type") VALUES ('3bc8710c-b0e1-4cd0-8bf6-e57da9cd836e', 'What is the purpose of the use strict directive in JavaScript', 'multiplechoice');
INSERT INTO "question" ("id", "text", "type") VALUES ('920e0b5b-2d49-4fd7-b605-40d9a7bdf5f3', 'What is the purpose of the use strict directive in JavaScript', 'multiplechoice');
INSERT INTO "question" ("id", "text", "type") VALUES ('02bc4eae-84ed-4e13-aca9-d5acee391b32', 'Describe how CSS specificity is calculated.', 'multiplechoice');
INSERT INTO "question" ("id", "text", "type") VALUES ('f05088a1-ca36-4563-8e02-03a58e7048e4', 'Describe how CSS specificity is calculated.', 'multiplechoice');
INSERT INTO "question" ("id", "text", "type") VALUES ('03ae30fe-d1bf-4301-9089-1edb6a1b0a94', 'What is a RESTful API', 'multiplechoice');
INSERT INTO "question" ("id", "text", "type") VALUES ('4c30a5b6-d15d-4c1e-a128-94f0b6632cff', 'Explain the difference between  and  in JavaScript.', 'multiplechoice');
INSERT INTO "question" ("id", "text", "type") VALUES ('df25cf87-a002-4b19-8e81-5c97f5da0d13', 'What is a RESTful API', 'longanswer');
INSERT INTO "question" ("id", "text", "type") VALUES ('239afe64-f954-497d-8360-68a7b019c424', 'Explain the difference between  and  in JavaScript.', 'longanswer');
INSERT INTO "question" ("id", "text", "type") VALUES ('3521bc81-7894-403b-985a-ce5cbcd947be', 'Explain the difference between  and  in JavaScript.', 'multiplechoice');

INSERT INTO "option" ("id", "text", "isCorrect", "questionId") VALUES ('08b92efc-91e8-45ee-be09-ed63cb8a131f', 'Option B False', false, '06d5699b-536c-4d23-8a67-64d8465284a0');
INSERT INTO "option" ("id", "text", "isCorrect", "questionId") VALUES ('4c29ab88-a600-4304-b3a4-6a9cdf455e8e', 'Option A True', false, '4c30a5b6-d15d-4c1e-a128-94f0b6632cff');
INSERT INTO "option" ("id", "text", "isCorrect", "questionId") VALUES ('1557290f-1f55-4f64-b9d0-71ec01688b53', 'Option B False', false, '02bc4eae-84ed-4e13-aca9-d5acee391b32');
INSERT INTO "option" ("id", "text", "isCorrect", "questionId") VALUES ('2c909745-2414-4cd8-ae25-f9aa705c9737', 'Option E None of the above', false, '920e0b5b-2d49-4fd7-b605-40d9a7bdf5f3');
INSERT INTO "option" ("id", "text", "isCorrect", "questionId") VALUES ('e542cc3c-ec79-4029-a5f8-31f5866f26e6', 'Option E None of the above', false, '3521bc81-7894-403b-985a-ce5cbcd947be');
INSERT INTO "option" ("id", "text", "isCorrect", "questionId") VALUES ('6441343d-3244-45cd-bca6-31b6f89f0f4c', 'Option B False', false, '3521bc81-7894-403b-985a-ce5cbcd947be');
INSERT INTO "option" ("id", "text", "isCorrect", "questionId") VALUES ('9cdd011a-165b-4431-a9c2-beda3ab32ecb', 'Option D All of the above', true, '3bc8710c-b0e1-4cd0-8bf6-e57da9cd836e');
INSERT INTO "option" ("id", "text", "isCorrect", "questionId") VALUES ('525f0651-7527-4104-9512-fc64b316b120', 'Option C 42', true, '3521bc81-7894-403b-985a-ce5cbcd947be');
INSERT INTO "option" ("id", "text", "isCorrect", "questionId") VALUES ('d817241f-838c-4872-8ccd-093fc04411e5', 'Option D All of the above', false, '02bc4eae-84ed-4e13-aca9-d5acee391b32');
INSERT INTO "option" ("id", "text", "isCorrect", "questionId") VALUES ('a199eda7-0f77-4376-991e-8ccf8d036920', 'Option E None of the above', false, '03ae30fe-d1bf-4301-9089-1edb6a1b0a94');

INSERT INTO "test" ("id", "score", "completionTime", "userId") VALUES ('af16d233-299d-42b7-b913-c43346e1f5a6', 911, '2025-03-01T04:44:28.758Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "test" ("id", "score", "completionTime", "userId") VALUES ('54a796e0-e7e2-42ae-89b4-98b7b0b5edae', 151, '2024-10-22T19:45:09.974Z', '771e6ee2-1c3d-442f-83a1-197c32bc30b8');
INSERT INTO "test" ("id", "score", "completionTime", "userId") VALUES ('0337a2ed-6e9c-43f1-8056-e84e0f70ea76', 200, '2024-10-30T05:58:54.906Z', '7141cf60-7b0d-4f70-81cf-fee194d2bac3');
INSERT INTO "test" ("id", "score", "completionTime", "userId") VALUES ('4fedc589-f808-468e-bae3-f5c680a1aa16', 458, '2025-02-10T21:32:29.777Z', '771e6ee2-1c3d-442f-83a1-197c32bc30b8');
INSERT INTO "test" ("id", "score", "completionTime", "userId") VALUES ('4688a609-a4f7-4cb5-8956-5922fa89b8ac', 312, '2024-02-17T18:37:49.919Z', '013bc2fd-e097-4dda-b1c3-05ea9f3cc167');
INSERT INTO "test" ("id", "score", "completionTime", "userId") VALUES ('2835731a-ba7d-4d72-8b7a-607503f9d5cd', 704, '2024-04-20T18:01:08.195Z', '771e6ee2-1c3d-442f-83a1-197c32bc30b8');
INSERT INTO "test" ("id", "score", "completionTime", "userId") VALUES ('8bb05e42-befd-41b1-8a74-860fea0c41a2', 906, '2024-05-29T16:54:12.631Z', '7141cf60-7b0d-4f70-81cf-fee194d2bac3');
INSERT INTO "test" ("id", "score", "completionTime", "userId") VALUES ('bc6b3880-bf9b-46d9-891f-68b9a70e3e6d', 576, '2024-04-08T06:49:29.229Z', '771e6ee2-1c3d-442f-83a1-197c32bc30b8');
INSERT INTO "test" ("id", "score", "completionTime", "userId") VALUES ('83b32159-ddf6-461e-affd-58bed8ec51d6', 317, '2024-07-28T22:10:28.246Z', '10b8f46f-acac-4195-b298-77595a143d8a');
INSERT INTO "test" ("id", "score", "completionTime", "userId") VALUES ('5ae212d9-9712-4e3e-b810-d9a6b59dc3c8', 541, '2023-05-05T04:13:03.707Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "test_question" ("id", "testId", "questionId") VALUES ('9a45279f-5a47-407b-a34c-9b72e92e98f7', '54a796e0-e7e2-42ae-89b4-98b7b0b5edae', '06d5699b-536c-4d23-8a67-64d8465284a0');
INSERT INTO "test_question" ("id", "testId", "questionId") VALUES ('37f6b23f-a2a1-46ca-a4fd-c6d0561f9d04', '4fedc589-f808-468e-bae3-f5c680a1aa16', '3bc8710c-b0e1-4cd0-8bf6-e57da9cd836e');
INSERT INTO "test_question" ("id", "testId", "questionId") VALUES ('cfc432f3-044c-4670-8e70-4283de5fbd5c', '83b32159-ddf6-461e-affd-58bed8ec51d6', '02bc4eae-84ed-4e13-aca9-d5acee391b32');
INSERT INTO "test_question" ("id", "testId", "questionId") VALUES ('00faaec1-349e-473d-8ba6-fe60e5b24fbd', 'af16d233-299d-42b7-b913-c43346e1f5a6', '4c30a5b6-d15d-4c1e-a128-94f0b6632cff');
INSERT INTO "test_question" ("id", "testId", "questionId") VALUES ('16fc9ef3-d416-4dc6-8a1f-4af007cd249e', '2835731a-ba7d-4d72-8b7a-607503f9d5cd', 'f05088a1-ca36-4563-8e02-03a58e7048e4');
INSERT INTO "test_question" ("id", "testId", "questionId") VALUES ('976cf0d2-7b94-4fa2-88ff-422c128be56f', '0337a2ed-6e9c-43f1-8056-e84e0f70ea76', '02bc4eae-84ed-4e13-aca9-d5acee391b32');
INSERT INTO "test_question" ("id", "testId", "questionId") VALUES ('875bad7c-e05f-4aa7-9e14-bbd50088bcdd', '5ae212d9-9712-4e3e-b810-d9a6b59dc3c8', '3521bc81-7894-403b-985a-ce5cbcd947be');
INSERT INTO "test_question" ("id", "testId", "questionId") VALUES ('6e7626a3-9af7-4a4b-88b6-ab12a89c7fb2', '2835731a-ba7d-4d72-8b7a-607503f9d5cd', 'df25cf87-a002-4b19-8e81-5c97f5da0d13');
INSERT INTO "test_question" ("id", "testId", "questionId") VALUES ('3d744986-8662-494a-b35f-3d2fcafc6d30', '4fedc589-f808-468e-bae3-f5c680a1aa16', '06d5699b-536c-4d23-8a67-64d8465284a0');
INSERT INTO "test_question" ("id", "testId", "questionId") VALUES ('f7441485-72c1-43de-90d6-f413590dbb08', 'af16d233-299d-42b7-b913-c43346e1f5a6', '3bc8710c-b0e1-4cd0-8bf6-e57da9cd836e');

INSERT INTO "answer" ("id", "text", "testQuestionId", "selectedOptionId") VALUES ('6d25dc0f-8e78-4653-8529-ce79cedf9e87', 'JavaScript enables interactive web pages and is an essential part of web applications.', '976cf0d2-7b94-4fa2-88ff-422c128be56f', 'd817241f-838c-4872-8ccd-093fc04411e5');
INSERT INTO "answer" ("id", "text", "testQuestionId", "selectedOptionId") VALUES ('4500c630-187d-495b-aa01-441a689037e6', 'JavaScript enables interactive web pages and is an essential part of web applications.', '6e7626a3-9af7-4a4b-88b6-ab12a89c7fb2', 'd817241f-838c-4872-8ccd-093fc04411e5');
INSERT INTO "answer" ("id", "text", "testQuestionId", "selectedOptionId") VALUES ('673b956b-bdf9-4888-af5a-443801508eda', 'JavaScript enables interactive web pages and is an essential part of web applications.', '6e7626a3-9af7-4a4b-88b6-ab12a89c7fb2', '08b92efc-91e8-45ee-be09-ed63cb8a131f');
INSERT INTO "answer" ("id", "text", "testQuestionId", "selectedOptionId") VALUES ('67a535e2-5200-442e-9e3e-a98845a3a5e0', 'CSS is used for styling and visually organizing web pages.', '00faaec1-349e-473d-8ba6-fe60e5b24fbd', 'e542cc3c-ec79-4029-a5f8-31f5866f26e6');
INSERT INTO "answer" ("id", "text", "testQuestionId", "selectedOptionId") VALUES ('e933e57e-2377-4a91-b87d-bcb4a32682e2', 'A RESTful API is an application program interface that uses HTTP requests to GET PUT POST and DELETE data.', 'f7441485-72c1-43de-90d6-f413590dbb08', '1557290f-1f55-4f64-b9d0-71ec01688b53');
INSERT INTO "answer" ("id", "text", "testQuestionId", "selectedOptionId") VALUES ('991bfef4-977a-4996-ba05-ab7cd51cf35e', 'A RESTful API is an application program interface that uses HTTP requests to GET PUT POST and DELETE data.', '00faaec1-349e-473d-8ba6-fe60e5b24fbd', '6441343d-3244-45cd-bca6-31b6f89f0f4c');
INSERT INTO "answer" ("id", "text", "testQuestionId", "selectedOptionId") VALUES ('d6c3625f-07e2-4a2d-b1e5-c44f0a0c2efd', 'SQL is a standard language for storing manipulating and retrieving data in databases.', '6e7626a3-9af7-4a4b-88b6-ab12a89c7fb2', 'a199eda7-0f77-4376-991e-8ccf8d036920');
INSERT INTO "answer" ("id", "text", "testQuestionId", "selectedOptionId") VALUES ('cf868e2f-d610-46fb-a9e1-226167bf4ee2', 'A RESTful API is an application program interface that uses HTTP requests to GET PUT POST and DELETE data.', '37f6b23f-a2a1-46ca-a4fd-c6d0561f9d04', 'a199eda7-0f77-4376-991e-8ccf8d036920');
INSERT INTO "answer" ("id", "text", "testQuestionId", "selectedOptionId") VALUES ('6c218a2a-6e94-43a2-bc8f-053cf9d14e60', 'CSS is used for styling and visually organizing web pages.', 'f7441485-72c1-43de-90d6-f413590dbb08', '1557290f-1f55-4f64-b9d0-71ec01688b53');
INSERT INTO "answer" ("id", "text", "testQuestionId", "selectedOptionId") VALUES ('66747fa1-2460-47bc-be5c-a5a002df8148', 'CSS is used for styling and visually organizing web pages.', '9a45279f-5a47-407b-a34c-9b72e92e98f7', '4c29ab88-a600-4304-b3a4-6a9cdf455e8e');

INSERT INTO "leaderboard" ("id", "score", "rank", "userId") VALUES ('649ea8d8-5032-410f-91f3-db2506936b54', 384, 148, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "leaderboard" ("id", "score", "rank", "userId") VALUES ('0304ad16-453c-4030-865a-d4acce41163e', 644, 964, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "leaderboard" ("id", "score", "rank", "userId") VALUES ('c23d4bcb-515e-4acc-a2d4-48f2ce1721ec', 777, 465, 'd010c303-c949-48f7-ba3b-2c1542f3bc26');
INSERT INTO "leaderboard" ("id", "score", "rank", "userId") VALUES ('a72dcc08-0a48-449e-8b29-cc44348fd19d', 332, 836, '7141cf60-7b0d-4f70-81cf-fee194d2bac3');
INSERT INTO "leaderboard" ("id", "score", "rank", "userId") VALUES ('ff488cc0-207d-4912-9a23-ca6e189ac350', 895, 978, '8107a956-5be2-4101-b109-b5415221a763');
INSERT INTO "leaderboard" ("id", "score", "rank", "userId") VALUES ('579372ed-c882-469e-9ba8-bbc4f06213f5', 4, 792, '10b8f46f-acac-4195-b298-77595a143d8a');
INSERT INTO "leaderboard" ("id", "score", "rank", "userId") VALUES ('ff28c993-824d-4c05-828d-f9fe8516d300', 756, 130, '8107a956-5be2-4101-b109-b5415221a763');
INSERT INTO "leaderboard" ("id", "score", "rank", "userId") VALUES ('74aebb85-2ad0-4f35-86a0-2a4fc7e9f051', 730, 351, '013bc2fd-e097-4dda-b1c3-05ea9f3cc167');
INSERT INTO "leaderboard" ("id", "score", "rank", "userId") VALUES ('60fb0304-e696-408c-9b6d-ddc5be867823', 400, 825, '4e01d2f4-2e5f-4907-9101-93f7079db436');
INSERT INTO "leaderboard" ("id", "score", "rank", "userId") VALUES ('99d38fa2-4435-4d8b-87dd-30c32ba654be', 199, 80, '8107a956-5be2-4101-b109-b5415221a763');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
