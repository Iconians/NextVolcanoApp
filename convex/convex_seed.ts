// Auto-generated from Postgres SQL dumps
// Paste this into `convex/seed.ts` or similar.

import { mutation } from './_generated/server'
import { GenericId } from 'convex/values'

export const answersSeed = [
  {
    id: '07e67987-166e-4e51-9a0a-a45a7b58628d',
    created_at: '2024-01-10 16:49:34.53398+00',
    answers: ['Stratovolcano', 'Shield Volcano', 'Cinder Cone,'],
    question_foreign_key: '51dfe2a2-babd-47c6-9a77-760a5e7ba1c6',
    correct_answer: 'Shield Volcano'
  },
  {
    id: '097c7bd8-37c0-49f9-9eb4-35060977dcb8',
    created_at: '2024-01-10 20:46:21.878505+00',
    answers: ['79 AD', '1066 AD', '1812 AD'],
    question_foreign_key: '4429a1e0-cc40-482c-b8cb-1a28345b731b',
    correct_answer: '79 AD'
  },
  {
    id: '09d1e9b4-2474-4c75-be80-2bf3538329b8',
    created_at: '2024-02-21 19:39:51.38915+00',
    answers: ['Lava Fountain', 'Volcanic Plume', 'Eruption Column'],
    question_foreign_key: '61ebf066-b45f-44b4-ba07-8da28b43f1f1',
    correct_answer: 'Eruption Column'
  },
  {
    id: '0a538210-02b1-45e8-8986-48c5ca82e31f',
    created_at: '2024-01-10 21:34:11.94042+00',
    answers: ['Divergent Boundary', 'Convergent Boundary', 'Transform Boundary'],
    question_foreign_key: '3d6fc16e-ebe2-4b6a-a55d-53344385c7e6',
    correct_answer: 'Convergent Boundary'
  },
  {
    id: '0bfb042c-98cd-463e-863e-8b0a8fcea9ee',
    created_at: '2024-01-10 19:53:07.295024+00',
    answers: ['Iceland', 'United States (Alaska)', 'Japan'],
    question_foreign_key: 'e3f44334-2550-454c-bbfb-1273162eb4ad',
    correct_answer: 'United States (Alaska)'
  },
  {
    id: '13082e6b-3f3b-476a-9b25-3e57c93c1286',
    created_at: '2024-02-21 23:15:39.003848+00',
    answers: ['Basalt', 'Pumice', 'Obsidian'],
    question_foreign_key: 'ebf02606-5093-4661-a699-23247700f60d',
    correct_answer: 'Basalt'
  },
  {
    id: '178f20e1-ad0e-492a-aa9b-def1b78ca205',
    created_at: '2024-01-10 21:29:00.598216+00',
    answers: ['Quartz', 'Feldspar', 'Zircon'],
    question_foreign_key: '1b0a618d-c5b7-4249-8732-ee51afc3c8c2',
    correct_answer: 'Feldspar'
  },
  {
    id: '18b6a8d0-dc9a-4a93-9a08-e21a7c9371ab',
    created_at: '2024-01-10 17:14:01.377482+00',
    answers: ['Mantle', 'Crust', 'Outer Core'],
    question_foreign_key: '261f91bb-38a8-413a-8995-2b1ddc86e78f',
    correct_answer: 'Mantle'
  },
  {
    id: '1ce2af87-7972-4138-9cd5-fe45b04a2c1d',
    created_at: '2024-02-21 19:48:10.479828+00',
    answers: ['Vent', 'Fissure', 'Lava Fountain'],
    question_foreign_key: '444f0722-608d-4121-9807-78acd8925335',
    correct_answer: 'Lava Fountain'
  },
  {
    id: '1d42f26e-fea3-4498-acd5-758888dcc8b4',
    created_at: '2024-01-10 19:58:49.857686+00',
    answers: ['Pumice', 'Obsidian', 'Gneiss'],
    question_foreign_key: '5ade8ce2-3129-4b7b-937a-1eb782cd93f8',
    correct_answer: 'Pumice\n'
  },
  {
    id: '1df3e8e5-637b-4cbd-bb72-d67053166cc7',
    created_at: '2024-02-21 23:17:14.555767+00',
    answers: ['Stratovolcano', 'Shield Volcano', 'Complex Volcano'],
    question_foreign_key: '0ad6bfe3-1c46-4f3e-953a-9c00c4b983cb',
    correct_answer: 'Complex Volcano'
  },
  {
    id: '1f48ce1d-0971-43e2-96ce-80e52c8c45a2',
    created_at: '2024-01-10 20:53:50.650683+00',
    answers: ['Mount St. Helens', 'Mount Etna', 'Mount Kilimanjaro'],
    question_foreign_key: '4d6579c5-9038-4e9b-8500-2c4117966cc3',
    correct_answer: 'Mount Etna'
  },
  {
    id: '205aacb4-18d3-4dcb-8af4-2d84f25d7ed8',
    created_at: '2024-02-21 18:06:06.610734+00',
    answers: ['Fumarole', 'Geyser', 'Ventole'],
    question_foreign_key: 'd15116ad-c3b0-4605-a55b-173090989d86',
    correct_answer: 'Fumarole'
  },
  {
    id: '21a90c4e-15f1-4782-ac40-0121fedc8b78',
    created_at: '2024-02-21 23:20:06.352387+00',
    answers: ['Pacific Ocean', 'Indian Ocean', 'Atlantic Ocean'],
    question_foreign_key: 'c12a132c-1c5f-44d0-b0b9-b2ec9ddb1d2a',
    correct_answer: 'Indian Ocean'
  },
  {
    id: '22a57d7f-202a-45e7-8235-2e16b528fd1b',
    created_at: '2024-01-10 16:53:17.106004+00',
    answers: ['Mount St. Helens', 'Mount Vesuvius', 'Mount Fuji'],
    question_foreign_key: 'd03cb2e3-b77a-4e41-ac03-eca8bff7df18',
    correct_answer: 'Mount Vesuvius'
  },
  {
    id: '2332a9d4-fadd-42a8-952f-7ad87d44f6b2',
    created_at: '2024-01-10 21:48:43.816289+00',
    answers: ['Dormant Volcano', 'Extinct Volcano', 'Active Volcano'],
    question_foreign_key: 'a7d04336-8bd6-47e7-ba93-dc3ca3a66b68',
    correct_answer: 'Extinct Volcano'
  },
  {
    id: '2594a986-2270-4629-b5c1-5bce24cb97a2',
    created_at: '2024-02-21 17:21:01.478814+00',
    answers: ['Santorini', 'Sicily', 'Crete'],
    question_foreign_key: 'dbece1c5-bef0-46ba-b3fb-ad0b3d475ee8',
    correct_answer: 'Santorini'
  },
  {
    id: '2598236e-1c32-40a9-86f9-0ddef394f04b',
    created_at: '2024-02-21 19:24:50.139795+00',
    answers: ['Basaltic Lava', 'Andesitic Lava', 'Rhyolitic Lava'],
    question_foreign_key: '6fedc3fb-b0ad-4989-8d54-a610d3438d17',
    correct_answer: 'Rhyolitic Lava'
  },
  {
    id: '29682f56-8c78-4eea-a750-630d006d5328',
    created_at: '2024-02-21 19:15:56.828496+00',
    answers: ['Pumice', 'Ash', 'Scoria'],
    question_foreign_key: '08702d14-309f-4561-99bf-44fc1d0549b2',
    correct_answer: 'Ash'
  },
  {
    id: '2a0a3e37-fccf-4ae2-9a6d-5a1312fe209a',
    created_at: '2024-01-10 17:21:47.853806+00',
    answers: ['Lava', 'Magma', 'Pyroclastic Flow'],
    question_foreign_key: 'e83f942f-0c90-4194-841c-bda8076f794d',
    correct_answer: 'Lava'
  },
  {
    id: '2c17571f-08bd-4079-910d-6d0662395abf',
    created_at: '2024-02-21 16:45:47.152937+00',
    answers: ['Mount Vesuvius', 'Mount Fuji', 'Mount Kilimanjaro'],
    question_foreign_key: '67500088-b1c0-49f9-b637-0b4166a64f88',
    correct_answer: 'Mount Fuji'
  },
  {
    id: '2d0a0e8e-5753-43c2-95a6-975d79b273d5',
    created_at: '2024-02-21 17:51:57.329535+00',
    answers: ['Mount St. Helens', 'Krakatoa', 'Mount Pinatubo'],
    question_foreign_key: '3d2bd0e1-acc5-4483-8c9e-86202b1b88b1',
    correct_answer: 'Krakatoa'
  },
  {
    id: '35ba6bf1-2ae9-4cf4-993b-6572c75e3b4f',
    created_at: '2024-01-10 20:48:51.537908+00',
    answers: ['Oxygen', 'Sulfur Dioxide', 'Carbon Monoxide'],
    question_foreign_key: '938f60cc-e6a7-4e53-adec-c9396cfa3269',
    correct_answer: 'Sulfur Dioxide'
  },
  {
    id: '3da96e56-c8cc-44b2-9c70-c30d07acf614',
    created_at: '2024-01-10 22:01:03.707821+00',
    answers: ['Mount Tambora eruption', 'Krakatoa eruption', 'Mount Pinatubo eruption'],
    question_foreign_key: '4c25bbe6-5fc1-470e-a427-73ad4dc37fb9',
    correct_answer: 'Mount Tambora eruption'
  },
  {
    id: '3ece89c8-966c-4fcc-8aa4-6f156ac958f6',
    created_at: '2024-01-10 17:19:46.455263+00',
    answers: ['Mount Etna', 'Mauna Kea', 'Mauna Loa'],
    question_foreign_key: 'd922b2b5-4261-475c-9360-98bb2606daf9',
    correct_answer: 'Mauna Loa'
  },
  {
    id: '3ffd1b97-b8a8-4fce-9e1c-2330c5386736',
    created_at: '2024-02-21 19:45:06.703851+00',
    answers: ['1980', '1991', '2000'],
    question_foreign_key: '75b80d7f-6a85-40cb-a295-a86bdc0716fc',
    correct_answer: '1991'
  },
  {
    id: '42a23254-be7d-40d5-81d3-92e025141681',
    created_at: '2024-01-10 20:00:43.71693+00',
    answers: ['Dormant Volcano', 'Extinct Volcano', 'Inactive Volcano'],
    question_foreign_key: '6f7de8e5-81df-4fbd-a945-681ab89f3dc9',
    correct_answer: 'Dormant Volcano'
  },
  {
    id: '44ebe8d8-44f8-4a22-903d-225e3ca7a6e5',
    created_at: '2024-02-21 19:26:04.009881+00',
    answers: ['Rwanda', 'Kenya', 'Tanzania'],
    question_foreign_key: '256e0fdf-dabd-4cd8-a37e-2d4d417a707f',
    correct_answer: 'Rwanda'
  },
  {
    id: '47f3224f-7bf1-4750-8921-965706d57f04',
    created_at: '2024-01-10 20:04:12.00447+00',
    answers: [
      'They create oceanic ridges',
      'They mark the boundaries of tectonic plates',
      'They form along subduction zones'
    ],
    question_foreign_key: '47e5a563-df3b-46db-ba77-7d89138a2070',
    correct_answer: 'They form along subduction zones'
  },
  {
    id: '4af5f8f8-92ee-4626-adb4-11db8197d863',
    created_at: '2024-02-21 23:23:31.597701+00',
    answers: ['Rhyolite', 'Andesite', 'Basalt'],
    question_foreign_key: '9d592d71-9add-4f6b-8935-fbbbf008d21f',
    correct_answer: 'Rhyolite'
  },
  {
    id: '4b96612c-5c32-4416-9d1a-08861f731681',
    created_at: '2024-02-21 23:35:40.573123+00',
    answers: ['Italy', 'Greece', 'Spain'],
    question_foreign_key: '7031772f-1238-4c30-b14a-681588f6d18f',
    correct_answer: 'Italy'
  },
  {
    id: '4d4c294b-063b-4b17-85f5-59ac9b4d05ba',
    created_at: '2024-02-21 17:59:33.699834+00',
    answers: ['South Africa', 'New Zealand', 'Argentina'],
    question_foreign_key: '2d624fbf-3305-4c91-8d54-dc24a0622b89',
    correct_answer: 'South Africa'
  },
  {
    id: '4e8decec-9f8a-4b2c-9438-1a6060465f4e',
    created_at: '2024-01-10 20:13:23.419042+00',
    answers: ['Andes', 'Alps', 'Apennines'],
    question_foreign_key: '89b9b3e3-3cc8-4715-80d0-44df5d1d43dc',
    correct_answer: 'Apennines'
  },
  {
    id: '505fb42c-9057-4cd7-b221-93255fbb15f9',
    created_at: '2024-01-10 19:48:26.98951+00',
    answers: ['Mount Tambora', 'Mount Pinatubo', 'Krakatoa'],
    question_foreign_key: 'fadd4fdf-d0ba-4077-8977-900a283ddf76',
    correct_answer: 'Mount Tambora'
  },
  {
    id: '59fafac5-3ea4-4b94-bdfe-a1ccbf9a99e9',
    created_at: '2024-02-21 16:50:05.390102+00',
    answers: ['Yellowstone National Park', 'Grand Canyon National Park', 'Yosemite National Park'],
    question_foreign_key: '950aec39-ed60-4d9a-9cea-b004578a7a6a',
    correct_answer: 'Yellowstone National Park'
  },
  {
    id: '5a63fca7-a725-4d05-bc20-1d553f1b3691',
    created_at: '2024-02-21 17:27:35.461309+00',
    answers: ['Shield Volcano', 'Stratovolcano', 'Cinder Cone'],
    question_foreign_key: '31e8d6c9-f2b8-4769-9f5f-692a9125b2fd',
    correct_answer: 'Shield Volcano'
  },
  {
    id: '5c72e0a0-2d61-49e4-9ff5-3ab2c06897f4',
    created_at: '2024-02-21 19:42:38.013009+00',
    answers: ['Shield Volcano', 'Cinder Cone', 'Stratovolcano'],
    question_foreign_key: 'c0e8b690-e83a-4fee-8bec-3c532c225701',
    correct_answer: 'Shield Volcano'
  },
  {
    id: '5cd36159-cd2a-4041-a113-0bcad1252094',
    created_at: '2024-02-21 17:25:01.500605+00',
    answers: ['Fissure', 'Fault', 'Crevasse'],
    question_foreign_key: '5d9ca192-a00f-46df-8f4d-8ee9f239941f',
    correct_answer: 'Fissure'
  },
  {
    id: '5f26ff67-7b6f-4f28-992b-56b139375fce',
    created_at: '2024-02-21 19:08:06.952932+00',
    answers: ['Crater', 'Vent', 'Abyss'],
    question_foreign_key: 'cac06308-247e-4c57-87c1-ab85df4b670c',
    correct_answer: 'Crater'
  },
  {
    id: '5fc950c1-1a32-4346-a1e4-348a59b6a0fe',
    created_at: '2024-01-10 17:27:12.656158+00',
    answers: [
      'A circle of active volcanoes around the Pacific Ocean',
      'A volcanic island chain in the Atlantic Ocean',
      'A desert region with dormant volcanoes'
    ],
    question_foreign_key: '956f744d-547f-4290-9def-c1a5940fe0a2',
    correct_answer: 'A circle of active volcanoes around the Pacific Ocean'
  },
  {
    id: '61fd47fd-d0cc-45d6-80cd-6bd53eac4b21',
    created_at: '2024-01-10 19:46:09.418471+00',
    answers: ['Hydrogen', 'Carbon Monoxide', 'Water Vapor'],
    question_foreign_key: '7dbe65be-006a-4923-9a57-9bd3d071799a',
    correct_answer: 'Water Vapor'
  },
  {
    id: '63cba0fe-62b2-4cf6-935a-c57d274533fc',
    created_at: '2024-02-21 19:35:55.501444+00',
    answers: ['Rhyolite', 'Andesite', 'Basalt'],
    question_foreign_key: 'be46a850-5198-4f02-a296-208818038d9e',
    correct_answer: 'Basalt'
  },
  {
    id: '650ba9ff-f571-4918-bf7e-ef41168350f8',
    created_at: '2024-02-21 19:17:33.377255+00',
    answers: ['Mayon Volcano', 'Taal Volcano', 'Mount Apo'],
    question_foreign_key: '3bc03cbd-ba03-4000-8cef-ab0e5854f78b',
    correct_answer: 'Taal Volcano'
  },
  {
    id: '6ae06f87-2401-45ad-aa32-9a516c1646f1',
    created_at: '2024-01-10 21:41:49.190375+00',
    answers: ['Shield Volcano', 'Cinder Cone', 'Stratovolcano'],
    question_foreign_key: 'ea4e9696-9ba6-4228-9541-1c4b2f0d858e',
    correct_answer: 'Stratovolcano'
  },
  {
    id: '6c27846e-bf7f-411a-a421-d6f3a8d25295',
    created_at: '2024-02-21 19:38:24.683074+00',
    answers: ['Crater', 'Vent', 'Caldera'],
    question_foreign_key: '643f9416-3603-4f2f-b2e5-97c8d6db108c',
    correct_answer: 'Caldera'
  },
  {
    id: '6d0b3c61-f6c9-4de5-b89e-244191f7b0b5',
    created_at: '2024-02-21 18:09:31.685616+00',
    answers: ['Shield Volcano', 'Cinder Cone', 'Stratovolcano'],
    question_foreign_key: '476b9677-a3df-490b-a6ff-5e260e2ccf89',
    correct_answer: 'Shield Volcano'
  },
  {
    id: '6e01479b-2e23-48d1-b606-38f8a2d7ccd7',
    created_at: '2024-02-21 16:52:24.662473+00',
    answers: ['Ecuador', 'Peru', 'Chile'],
    question_foreign_key: 'b2d76f61-988c-4172-9ac8-cd1cf5e0dc04',
    correct_answer: 'Ecuador'
  },
  {
    id: '702e486a-42dc-4c39-bc17-be9b4c62bc48',
    created_at: '2024-02-21 19:34:40.103986+00',
    answers: ['Oxygen', 'Sulfur Dioxide', 'Carbon Dioxide'],
    question_foreign_key: '733b19d6-299e-4fc6-93f6-486199dc8e1e',
    correct_answer: 'Sulfur Dioxide'
  },
  {
    id: '703e783d-071c-4157-99ec-8a54d7115c94',
    created_at: '2024-01-10 19:50:41.13088+00',
    answers: ['Convergent Boundary', 'Divergent Boundary', 'Transform Boundary'],
    question_foreign_key: '123bd517-8ab3-4aff-bcda-6489879cf73e',
    correct_answer: 'Convergent Boundary'
  },
  {
    id: '714bc805-9fa7-412c-909b-eb4eb1569cf9',
    created_at: '2024-01-10 21:26:20.524402+00',
    answers: ['Indonesia', 'Japan', 'Greece'],
    question_foreign_key: '711ce2cb-8ffd-492e-98b0-432b17e0ea41',
    correct_answer: 'Indonesia'
  },
  {
    id: '75d44858-6a28-4b5d-81e3-8f0b5721b2c9',
    created_at: '2024-01-10 19:43:25.257042+00',
    answers: ['Crater', 'Vent', 'Abyss'],
    question_foreign_key: 'c8e819ac-7a79-429c-bf9b-17c920bdb605',
    correct_answer: 'Crater'
  },
  {
    id: '7aab9e1d-9e3d-46c3-ba3d-229c4868bb52',
    created_at: '2024-02-21 19:31:40.529145+00',
    answers: ['Italy', 'Spain', 'Greece'],
    question_foreign_key: '97f72c78-3111-4bcd-8fcb-42258f482565',
    correct_answer: 'Spain'
  },
  {
    id: '7b00db93-a2c4-4c16-89b8-5c802eea8fbf',
    created_at: '2024-01-10 21:09:27.476652+00',
    answers: ['Basaltic Lava', 'Andesitic Lava', 'Rhyolitic Lava'],
    question_foreign_key: '3f41ddd3-3d06-41ad-88a3-3600cbebb914',
    correct_answer: 'Basaltic Lava'
  },
  {
    id: '7c1ec189-ab97-4ab0-9509-d6fe1628002e',
    created_at: '2024-01-10 21:13:10.945954+00',
    answers: ['Mount Fuji', 'Mount St. Helens', 'Mount Rainier'],
    question_foreign_key: '98a0dfd0-f79b-4917-99ba-4886567b6bcd',
    correct_answer: 'Mount St. Helens'
  },
  {
    id: '7c2d4b88-b17c-44c7-b888-68101439064b',
    created_at: '2024-02-21 19:28:55.116159+00',
    answers: ['Rhyolite', 'Andesite', 'Basalt'],
    question_foreign_key: 'a31079ef-a771-4a6d-85aa-56c28bb57bec',
    correct_answer: 'Basalt'
  },
  {
    id: '8354d679-f5e6-4ba3-9953-7619880cb3bc',
    created_at: '2024-02-21 16:58:32.406602+00',
    answers: ['Shield Volcano', 'Cinder Cone', 'Stratovolcano'],
    question_foreign_key: 'a25ecbcf-e85f-4eb1-8180-e7c7c56b0dc8',
    correct_answer: 'Cinder Cone'
  },
  {
    id: '85e50e13-f732-4271-92f2-0bb59e17fa62',
    created_at: '2024-01-10 21:31:30.272727+00',
    answers: ['Earthquake intensity', 'Volcanic eruption magnitude', 'Tsunami height'],
    question_foreign_key: '24ad1a4b-fec4-4e23-9644-5f618a23a738',
    correct_answer: 'Volcanic eruption magnitude'
  },
  {
    id: '86acbc47-6f3b-433e-8f67-6dcfff9f7302',
    created_at: '2024-02-21 19:00:07.838765+00',
    answers: ['Lava', 'Obsidian', 'Granite'],
    question_foreign_key: '59bf4322-0a19-4cc2-a62e-a9c9ad84fb62',
    correct_answer: 'Granite'
  },
  {
    id: '8bed887e-db9d-4d2e-8817-8759a529211f',
    created_at: '2024-02-21 19:22:03.503963+00',
    answers: ['Caldera', 'Maar', 'Crater Lake'],
    question_foreign_key: 'efdcb6fb-7b73-43fb-91ce-8f9a0f5db9bc',
    correct_answer: 'Maar'
  },
  {
    id: '8d60576e-03d6-4f78-bd56-8426e01a4bbd',
    created_at: '2024-02-21 19:30:30.634752+00',
    answers: ['Granite', 'Pumice', 'Basalt'],
    question_foreign_key: 'e3ad9378-45e3-4810-9fd4-4515e3168e47',
    correct_answer: 'Basalt'
  },
  {
    id: '8e00f97f-ac1b-4e05-93b8-2afa21e3f224',
    created_at: '2024-01-10 17:11:40.734644+00',
    answers: ['Oxygen', 'Carbon Dioxide', 'Nitrogen'],
    question_foreign_key: '30e3dbdf-9387-44d4-a4a4-674612e45592',
    correct_answer: 'Carbon Dioxide'
  },
  {
    id: '900c03a2-1f2d-4a42-a990-45081b2cc60c',
    created_at: '2024-01-10 21:44:04.433102+00',
    answers: ['Obsidian', 'Pumice', 'Basalt'],
    question_foreign_key: '26f1cab5-1f06-40d1-8683-896d4f343d6a',
    correct_answer: 'Obsidian'
  },
  {
    id: '9a5e5f67-35d6-466e-be1d-27e11b4e3e63',
    created_at: '2024-01-10 21:37:01.421205+00',
    answers: ['Mauna Loa', 'Mount Etna', 'Mount Kilimanjaro'],
    question_foreign_key: '391171ce-8d1a-42c1-a8e9-eb407abcd105',
    correct_answer: 'Mauna Loa'
  },
  {
    id: '9cfd837a-c71d-4e6a-802f-56e3660c308a',
    created_at: '2024-02-21 18:15:40.725199+00',
    answers: ['Mid-Atlantic Ridge', 'Aleutian Islands', 'Mariana Trench'],
    question_foreign_key: '6ff75bfa-2a0f-4a2e-8444-6167adffd9e7',
    correct_answer: 'Aleutian Islands'
  },
  {
    id: 'a5f586b9-3718-41c3-9d49-da378de0d8dd',
    created_at: '2024-02-21 18:13:46.168529+00',
    answers: [
      'Eyjafjallaj\u00f6kull eruption',
      'Mount Merapi eruption',
      'Popocat\u00e9petl eruption'
    ],
    question_foreign_key: '65e330a2-cd54-462b-b701-21fc2b8399b3',
    correct_answer: 'Eyjafjallaj\u00f6kull eruption'
  },
  {
    id: 'a876a7b9-707e-4de5-8f52-dea71223109d',
    created_at: '2024-02-21 19:27:26.763014+00',
    answers: ['Seismology', 'Volcanology', 'Petrology'],
    question_foreign_key: '487037df-7b05-438d-8379-850c7d4f4fbd',
    correct_answer: 'Volcanology'
  },
  {
    id: 'a9d3c280-aa4d-4a0d-8df2-e2987a21a2d1',
    created_at: '2024-02-21 19:43:43.185288+00',
    answers: ['Pumice', 'Obsidian', 'Rhyolite'],
    question_foreign_key: 'ccb68f70-d61b-43dd-9721-e1309a113e2e',
    correct_answer: 'Rhyolite'
  },
  {
    id: 'aa2b025e-913b-4e17-b085-0315e1b1b0cd',
    created_at: '2024-01-10 19:55:48.287698+00',
    answers: ['The type of lava', 'The presence of water', 'The depth of the magma chamber'],
    question_foreign_key: 'c3180e45-09c3-4fa4-a305-27ea2c93bf07',
    correct_answer: 'The presence of water'
  },
  {
    id: 'aa31cfae-95af-405a-a623-d8ae8d4aec82',
    created_at: '2024-02-21 19:37:08.237084+00',
    answers: ['Oregon', 'Colorado', 'Arizona'],
    question_foreign_key: '92f7944c-f1bf-4801-bc9d-98e690a249ef',
    correct_answer: 'Oregon'
  },
  {
    id: 'b0cc4194-40fa-44a4-a7c7-97fa34310ac0',
    created_at: '2024-01-10 17:24:40.959943+00',
    answers: ['Basalt', 'Granite', 'Sandstone'],
    question_foreign_key: '858b2f49-f677-4ac5-af70-e87028b9b826',
    correct_answer: 'Granite'
  },
  {
    id: 'b213569f-f05f-431a-84be-8fe53048b064',
    created_at: '2024-02-21 23:29:28.553316+00',
    answers: ['Santorini', 'Stromboli', 'Vesuvius'],
    question_foreign_key: '3884fe92-1dd7-4299-809e-869f620368e3',
    correct_answer: 'Vesuvius'
  },
  {
    id: 'b5942e7f-0fd2-4f15-b965-416cc147bf9c',
    created_at: '2024-01-10 21:00:50.729155+00',
    answers: ['Caldera', 'Crater', 'Vent'],
    question_foreign_key: '1a8027bf-a13b-4f25-b3b5-b3689f80d4ac',
    correct_answer: 'Caldera'
  },
  {
    id: 'bf420f4d-6e7c-4192-a3c5-7d56efaecfd7',
    created_at: '2024-02-21 19:11:13.502922+00',
    answers: ['Pyroclastic Flow', 'Eruption Cloud', 'Plinian Eruption'],
    question_foreign_key: 'd5db3be7-45ed-485c-8ddc-21640b8e5ecd',
    correct_answer: 'Plinian Eruption'
  },
  {
    id: 'c088c15e-a14a-4ccb-80af-580e630cfa3e',
    created_at: '2024-01-10 20:57:24.175456+00',
    answers: [
      'A circle of active volcanoes around the Pacific Ocean',
      'A ring of mountains around the Atlantic Ocean',
      'A volcanic ridge in the Indian Ocean'
    ],
    question_foreign_key: 'a0562323-237a-47ac-bc8a-fa2ef62cb82a',
    correct_answer: 'A circle of active volcanoes around the Pacific Ocean'
  },
  {
    id: 'c1d29ea6-4089-4246-8647-6f1bb0358f60',
    created_at: '2024-02-21 16:48:06.744335+00',
    answers: ['Carbon Dioxide', 'Hydrogen Sulfide', 'Water Vapor'],
    question_foreign_key: '4283af4c-f8be-4c55-9a5d-aeb794e38765',
    correct_answer: 'Water Vapor'
  },
  {
    id: 'c2969db5-cc9d-4289-8ae5-96a17711daf9',
    created_at: '2024-02-21 23:30:44.822473+00',
    answers: ['Crater', 'Fumarole', 'Vent'],
    question_foreign_key: 'a356ce02-7e9b-4b6c-9a59-b13c1ad8331d',
    correct_answer: 'Fumarole'
  },
  {
    id: 'c4b444d0-2514-492a-8b10-6e54d51ca1d8',
    created_at: '2024-02-21 17:33:40.212812+00',
    answers: ['Pumice', 'Tuff', 'Rhyolite'],
    question_foreign_key: '4b8589dc-2245-46d7-a72e-9278e99c4c23',
    correct_answer: 'Tuff'
  },
  {
    id: 'c578c55f-3531-46f1-afa7-7cfe11b318c3',
    created_at: '2024-01-10 20:51:07.148705+00',
    answers: ['Magma', 'Lava', 'Ash'],
    question_foreign_key: '75db0d92-6444-45a4-8efd-443041d4108d',
    correct_answer: 'Magma'
  },
  {
    id: 'c742bd94-c529-46f1-adfd-b0cebfd40055',
    created_at: '2024-02-21 16:40:11.667346+00',
    answers: ['Lava Flow', 'Lahar', 'Pyroclastic Flow'],
    question_foreign_key: 'f60509fa-d63a-4d56-ba8e-428df80fdfb7',
    correct_answer: 'Lahar'
  },
  {
    id: 'c806ba30-44cf-47f4-bc10-a536870f496f',
    created_at: '2024-02-21 16:55:02.421146+00',
    answers: ['Eruption', 'Intrusion', 'Extrusion'],
    question_foreign_key: '82be1ce7-778a-4078-b442-917070e43bfe',
    correct_answer: 'Intrusion'
  },
  {
    id: 'c9aaab5e-5c30-48a9-ab80-ec81fea83c93',
    created_at: '2024-02-21 17:57:17.444875+00',
    answers: ['African Plate', 'Pacific Plate', 'Nazca Plate'],
    question_foreign_key: '288c1c63-d956-4060-aeb4-1a8f8dd73e83',
    correct_answer: 'Nazca Plate'
  },
  {
    id: 'cc183045-3f3b-428c-a709-e5277d43180f',
    created_at: '2024-02-21 17:30:00.823925+00',
    answers: ['Azores', 'Faroe Islands', 'Canary Islands'],
    question_foreign_key: '0e685e2b-4f29-4fde-8018-1093c86ffda5',
    correct_answer: 'Faroe Islands'
  },
  {
    id: 'd01878f1-b2e2-43ea-b3cc-d55326d725d5',
    created_at: '2024-02-21 23:31:59.605799+00',
    answers: ['Oxygen', 'Carbon Dioxide', 'Hydrogen Sulfide'],
    question_foreign_key: '9702d1d7-7d3a-4992-8181-31c5fea3d6aa',
    correct_answer: 'Hydrogen Sulfide'
  },
  {
    id: 'd1498993-19da-4f0b-a56f-2b70cf43750d',
    created_at: '2024-02-21 23:25:15.026206+00',
    answers: ['Pahoehoe', 'Aa', 'Pillow'],
    question_foreign_key: '7776e4e5-a14f-4429-ad03-be125379255b',
    correct_answer: 'Aa'
  },
  {
    id: 'd2a1e105-8d78-4214-a2ce-195721a1a52b',
    created_at: '2024-01-10 20:44:25.040272+00',
    answers: ['Shield Volcano', 'Stratovolcano', 'Cinder Cone'],
    question_foreign_key: 'bd4ab682-bff5-44d5-979e-a66d07ba1fa2',
    correct_answer: 'Stratovolcano'
  },
  {
    id: 'd3892e88-c878-4dfd-8124-b0798c863c62',
    created_at: '2024-02-21 18:12:05.354138+00',
    answers: ['Andesite', 'Pumice', 'Basalt'],
    question_foreign_key: 'f9093024-65f3-4d1f-ba80-495a20973c11',
    correct_answer: 'Pumice'
  },
  {
    id: 'd6eb1c95-d63c-43d4-9ba3-cda609658871',
    created_at: '2024-02-21 19:14:34.370859+00',
    answers: ['Intrusive Volcanism', 'Extrusive Volcanism', 'Phreatomagmatic Volcanism'],
    question_foreign_key: '25288a02-ddd6-4f8a-8df4-67579d1b7ff2',
    correct_answer: 'Intrusive Volcanism'
  },
  {
    id: 'd6fd468e-1852-4a5e-93c0-2fe0d4a944f3',
    created_at: '2024-02-21 19:32:55.856514+00',
    answers: ['Mid-Atlantic Ridge', 'Marianas Trench', 'Sunda Arc'],
    question_foreign_key: 'bc8f5510-8bb2-4465-a602-2b531b3753ee',
    correct_answer: 'Mid-Atlantic Ridge'
  },
  {
    id: 'd70deecd-127b-49b5-869b-ae377cecda6c',
    created_at: '2024-02-21 23:18:55.282207+00',
    answers: ['Mount Shasta', 'Yellowstone Caldera', 'Mount Rainier'],
    question_foreign_key: '89d725ce-aae6-46ff-8123-808166a8aa99',
    correct_answer: 'Yellowstone Caldera'
  },
  {
    id: 'dc5dca5b-3479-4436-a51f-774c894fc3c7',
    created_at: '2024-01-10 16:58:45.959245+00',
    answers: ['Dormant Volcano', 'Extinct Volcano', 'Active Volcano'],
    question_foreign_key: '18a6db24-1d7a-478d-8417-dbfe72bd1bac',
    correct_answer: 'Active Volcano'
  },
  {
    id: 'dd0b230c-d161-4777-aa76-6db0a492a314',
    created_at: '2024-02-21 23:14:23.801015+00',
    answers: ['Sicily', 'Sardinia', 'Ischia'],
    question_foreign_key: '61c57dc4-244d-42f6-a6f8-e91e3c57851a',
    correct_answer: 'Sicily'
  },
  {
    id: 'dfc6953a-95c0-4db1-8ac7-fca46e7d5b0f',
    created_at: '2024-02-21 19:12:37.689568+00',
    answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    question_foreign_key: 'a3df62ea-d530-489a-a3b7-9c1ccd8cf920',
    correct_answer: 'Atlantic Ocean'
  },
  {
    id: 'e2296033-130d-4b38-a324-2a8f34098a0a',
    created_at: '2024-02-21 23:28:00.708467+00',
    answers: ['Extinct Volcano', 'Inactive Volcano', 'Dormant Volcano'],
    question_foreign_key: '0ec4e3b0-aa10-49be-9edf-7306a59cb3ff',
    correct_answer: 'Dormant Volcano'
  },
  {
    id: 'ebe29c37-2493-4436-9e26-d49c0d159eff',
    created_at: '2024-01-10 21:18:55.800557+00',
    answers: ['Lava Flow', 'Pyroclastic Flow', 'Lahar'],
    question_foreign_key: 'c9aeafb5-6413-4339-accd-099cc491b74b',
    correct_answer: 'Pyroclastic Flow'
  },
  {
    id: 'ee5eaa5c-28eb-40ef-bcc3-f8ae0b1c01e3',
    created_at: '2024-02-21 19:40:51.236842+00',
    answers: ['Peru', 'Ecuador', 'Colombia'],
    question_foreign_key: 'efcb10e5-0af5-4d35-9570-0ad5bed6cf34',
    correct_answer: 'Ecuador'
  },
  {
    id: 'f49d1357-94d5-4476-80f0-58a4194ff500',
    created_at: '2024-02-21 19:09:53.754853+00',
    answers: ['Pele', 'Hera', 'Demeter'],
    question_foreign_key: '39d55070-4dc9-43dd-93ea-2618445d6959',
    correct_answer: 'Pele'
  },
  {
    id: 'f4a6d3bc-97d5-4b13-bd4d-ca6194de00bb',
    created_at: '2024-01-10 21:46:07.095053+00',
    answers: ['California', 'Idaho', 'Arizona'],
    question_foreign_key: 'c0d0e4d4-0157-45d6-b599-8d9ceb9a26f3',
    correct_answer: 'Idaho'
  },
  {
    id: 'f5618017-8fc9-44a6-9c98-67c9d49d5d4a',
    created_at: '2024-01-10 19:40:34.971332+00',
    answers: ['Richter Scale', 'Volcanic Explosivity Index (VEI)', 'Beaufort Scale'],
    question_foreign_key: 'aca99f32-3610-4c1a-8db0-6d6262230672',
    correct_answer: 'Volcanic Explosivity Index (VEI)'
  },
  {
    id: 'f715bb2a-cdb8-4354-835c-d51298b42ef2',
    created_at: '2024-02-21 23:26:36.894713+00',
    answers: ['Canada', 'United States', 'Mexico'],
    question_foreign_key: 'be0aba92-91be-4c9d-8f49-9d3f971ac812',
    correct_answer: 'United States'
  },
  {
    id: 'fdf6891a-c3ba-4376-802d-6f5528ec95c4',
    created_at: '2024-02-21 23:34:38.594148+00',
    answers: ['Pumice', 'Obsidian', 'Rhyolite'],
    question_foreign_key: 'f2bf99ec-7b70-495a-b148-b725da1c6b48',
    correct_answer: 'Rhyolite'
  }
] as const

export const questionsSeed = [
  {
    id: '08702d14-309f-4561-99bf-44fc1d0549b2',
    created_at: '2024-02-21 18:45:21.423678+00',
    question: 'What is the term for the solid rock fragments ejected during a volcanic eruption?'
  },
  {
    id: '0ad6bfe3-1c46-4f3e-953a-9c00c4b983cb',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which type of volcano is characterized by a combination of explosive eruptions and effusive lava flows?'
  },
  {
    id: '0e685e2b-4f29-4fde-8018-1093c86ffda5',
    created_at: '2024-02-21 16:32:45.660867+00',
    question:
      'What is the name of the volcanic island group that is part of the Kingdom of Denmark and is located in the North Atlantic Ocean?'
  },
  {
    id: '0ec4e3b0-aa10-49be-9edf-7306a59cb3ff',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What is the term for a volcano that is currently dormant but has the potential to erupt again in the future?'
  },
  {
    id: '123bd517-8ab3-4aff-bcda-6489879cf73e',
    created_at: '2023-12-26 03:15:57.740921+00',
    question: 'Which tectonic plate movement is often associated with volcanic activity?'
  },
  {
    id: '18a6db24-1d7a-478d-8417-dbfe72bd1bac',
    created_at: '2023-12-26 03:14:58.602898+00',
    question: 'What is the term for a volcano that is currently erupting or has erupted recently?'
  },
  {
    id: '1a8027bf-a13b-4f25-b3b5-b3689f80d4ac',
    created_at: '2023-12-26 03:15:57.740921+00',
    question: 'What volcanic feature is formed when a volcano collapses after a major eruption?'
  },
  {
    id: '1b0a618d-c5b7-4249-8732-ee51afc3c8c2',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'Which mineral, commonly found in volcanic rocks, is used to date the age of rocks in radiometric dating?'
  },
  {
    id: '24ad1a4b-fec4-4e23-9644-5f618a23a738',
    created_at: '2023-12-26 03:15:57.740921+00',
    question: 'What is the Volcanic Explosivity Index (VEI) used to measure?'
  },
  {
    id: '25288a02-ddd6-4f8a-8df4-67579d1b7ff2',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which type of volcanic activity occurs when magma forces its way through existing rock layers, creating vertical fractures?'
  },
  {
    id: '256e0fdf-dabd-4cd8-a37e-2d4d417a707f',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'In which African country is the volcanic mountain range known as the Virunga Mountains, home to endangered mountain gorillas?'
  },
  {
    id: '261f91bb-38a8-413a-8995-2b1ddc86e78f',
    created_at: '2023-12-26 03:14:58.602898+00',
    question: 'Which layer of the Earth do volcanoes primarily erupt through?'
  },
  {
    id: '26f1cab5-1f06-40d1-8683-896d4f343d6a',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'Which volcanic rock is formed from the rapid cooling of lava and is often used in jewelry?'
  },
  {
    id: '288c1c63-d956-4060-aeb4-1a8f8dd73e83',
    created_at: '2024-02-21 16:33:49.485873+00',
    question:
      'Which tectonic plate is subducted beneath the South American plate, leading to volcanic activity in the Andes Mountains?'
  },
  {
    id: '2d624fbf-3305-4c91-8d54-dc24a0622b89',
    created_at: '2024-02-21 16:34:13.799487+00',
    question:
      'In which country would you find the volcanic mountain range known as the Drakensberg Mountains?'
  },
  {
    id: '30e3dbdf-9387-44d4-a4a4-674612e45592',
    created_at: '2023-12-26 03:14:58.602898+00',
    question:
      'What gas is often released during volcanic eruptions and can pose a threat to human health?'
  },
  {
    id: '31e8d6c9-f2b8-4769-9f5f-692a9125b2fd',
    created_at: '2024-02-21 16:32:01.461409+00',
    question:
      'Which type of volcano is often associated with low-viscosity lava that can travel long distances from the vent?'
  },
  {
    id: '3884fe92-1dd7-4299-809e-869f620368e3',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which volcanic island, located in the Mediterranean, is known for the eruption that buried the city of Pompeii?'
  },
  {
    id: '391171ce-8d1a-42c1-a8e9-eb407abcd105',
    created_at: '2023-12-26 03:15:57.740921+00',
    question: "What is the name of the world's largest active volcano, located in Hawaii?"
  },
  {
    id: '39d55070-4dc9-43dd-93ea-2618445d6959',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which Hawaiian goddess is often associated with volcanoes and is considered the deity of fire and volcanoes?'
  },
  {
    id: '3bc03cbd-ba03-4000-8cef-ab0e5854f78b',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which volcano, located in the Philippines, is known for its perfectly symmetrical shape and is the most active volcano in the country?'
  },
  {
    id: '3d2bd0e1-acc5-4483-8c9e-86202b1b88b1',
    created_at: '2024-02-21 16:33:20.948349+00',
    question:
      'Which famous volcanic eruption in 1883 caused the loudest sound ever recorded in human history?'
  },
  {
    id: '3d6fc16e-ebe2-4b6a-a55d-53344385c7e6',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'Which tectonic plate boundary is often associated with the formation of stratovolcanoes?'
  },
  {
    id: '3f41ddd3-3d06-41ad-88a3-3600cbebb914',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'Which type of lava has a smooth, ropy texture and is often associated with shield volcanoes?'
  },
  {
    id: '4283af4c-f8be-4c55-9a5d-aeb794e38765',
    created_at: '2024-02-21 16:29:38.57906+00',
    question:
      'what is the primary gas emitted during Hawaii-style eruption, characterized by relatively calm lava flows?'
  },
  {
    id: '4429a1e0-cc40-482c-b8cb-1a28345b731b',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'In which year did the eruption of Mount Vesuvius bury the Roman cities of Pompeii and Herculaneum?'
  },
  {
    id: '444f0722-608d-4121-9807-78acd8925335',
    created_at: '2024-02-21 18:45:21.423678+00',
    question: 'What is the term for a volcanic vent from which fountains of lava are ejected?'
  },
  {
    id: '476b9677-a3df-490b-a6ff-5e260e2ccf89',
    created_at: '2024-02-21 16:34:53.467578+00',
    question:
      'Which type of volcano is known for its broad, gently sloping sides and is formed by the accumulation of low-viscosity lava flows?'
  },
  {
    id: '47e5a563-df3b-46db-ba77-7d89138a2070',
    created_at: '2023-12-26 03:15:57.740921+00',
    question: 'What role do stratovolcanoes often play in the formation of volcanic arcs?'
  },
  {
    id: '487037df-7b05-438d-8379-850c7d4f4fbd',
    created_at: '2024-02-21 18:45:21.423678+00',
    question: 'What is the term for the study of volcanoes and volcanic phenomena?'
  },
  {
    id: '4b8589dc-2245-46d7-a72e-9278e99c4c23',
    created_at: '2024-02-21 16:33:00.580461+00',
    question:
      'What is the term for a volcanic rock formed from the solidification of lava fragments ejected into the air during an eruption?'
  },
  {
    id: '4c25bbe6-5fc1-470e-a427-73ad4dc37fb9',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'Which volcanic event in 1815 led to the "Year Without a Summer" due to global climate effects?'
  },
  {
    id: '4d6579c5-9038-4e9b-8500-2c4117966cc3',
    created_at: '2023-12-26 03:15:57.740921+00',
    question: 'Which volcano is known as the highest peak in Europe and is located in Italy?'
  },
  {
    id: '51dfe2a2-babd-47c6-9a77-760a5e7ba1c6',
    created_at: '2023-12-26 03:14:58.602898+00',
    question: 'What type of volcano is known for its broad, gently sloping sides?'
  },
  {
    id: '59bf4322-0a19-4cc2-a62e-a9c9ad84fb62',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      "What is the term for a volcanic rock formed from the cooling and solidification of magma beneath the Earth's surface?"
  },
  {
    id: '5ade8ce2-3129-4b7b-937a-1eb782cd93f8',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'Which rock type is formed from volcanic ash and fragments ejected during an explosive eruption?'
  },
  {
    id: '5d9ca192-a00f-46df-8f4d-8ee9f239941f',
    created_at: '2024-02-21 16:31:46.015276+00',
    question:
      "What is the term for a crack or fracture in the Earth's crust from which lava erupts?"
  },
  {
    id: '61c57dc4-244d-42f6-a6f8-e91e3c57851a',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which volcanic island, part of Italy, is known for its black sand beaches and historical ruins?'
  },
  {
    id: '61ebf066-b45f-44b4-ba07-8da28b43f1f1',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What is the term for the phenomenon where volcanic ash and gases are expelled high into the atmosphere, potentially affecting global climate?'
  },
  {
    id: '643f9416-3603-4f2f-b2e5-97c8d6db108c',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which volcanic feature is a steep-sided, circular depression that forms around the summit of a volcano?'
  },
  {
    id: '65e330a2-cd54-462b-b701-21fc2b8399b3',
    created_at: '2024-02-21 16:35:33.510402+00',
    question:
      'Which volcanic event in 2010 disrupted air travel across Europe due to the ash cloud it produced?'
  },
  {
    id: '67500088-b1c0-49f9-b637-0b4166a64f88',
    created_at: '2024-02-21 16:26:47.393252+00',
    question:
      'Which famous volcano, located in Japan, is often depicted with a perfectly symmetrical cone?'
  },
  {
    id: '6f7de8e5-81df-4fbd-a945-681ab89f3dc9',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'What is the term for a volcano that has not erupted in a long time but could potentially erupt again in the future?'
  },
  {
    id: '6fedc3fb-b0ad-4989-8d54-a610d3438d17',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which type of lava has a high viscosity, flows slowly, and can create steep-sided volcanoes?'
  },
  {
    id: '6ff75bfa-2a0f-4a2e-8444-6167adffd9e7',
    created_at: '2024-02-21 16:35:51.286224+00',
    question:
      'What is the term for a volcanic island arc formed by the subduction of one oceanic plate beneath another?'
  },
  {
    id: '7031772f-1238-4c30-b14a-681588f6d18f',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'In which European country is Mount Etna, one of the most active volcanoes in the world?'
  },
  {
    id: '711ce2cb-8ffd-492e-98b0-432b17e0ea41',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'In which country would you find the volcanic island of Krakatoa, famous for its 1883 eruption?'
  },
  {
    id: '733b19d6-299e-4fc6-93f6-486199dc8e1e',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which gas, when present in volcanic emissions, can lead to acid rain and environmental damage?'
  },
  {
    id: '75b80d7f-6a85-40cb-a295-a86bdc0716fc',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'In which year did the eruption of Mount Pinatubo in the Philippines occur, one of the most powerful eruptions of the 20th century?'
  },
  {
    id: '75db0d92-6444-45a4-8efd-443041d4108d',
    created_at: '2023-12-26 03:15:57.740921+00',
    question: "What is the term for the molten rock beneath the Earth's surface before it erupts?"
  },
  {
    id: '7776e4e5-a14f-4429-ad03-be125379255b',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which type of lava flow has a jagged, blocky appearance due to the rapid cooling and solidification of lava?'
  },
  {
    id: '7dbe65be-006a-4923-9a57-9bd3d071799a',
    created_at: '2023-12-26 03:15:57.740921+00',
    question: 'Which gas,  when dissolved in magma, can contribute to explosive volcanic eruptions?'
  },
  {
    id: '82be1ce7-778a-4078-b442-917070e43bfe',
    created_at: '2024-02-21 16:30:50.41264+00',
    question:
      " What is the term for the process of molten rock breaking through the Earth's crust and reaching the surface?"
  },
  {
    id: '858b2f49-f677-4ac5-af70-e87028b9b826',
    created_at: '2023-12-26 03:14:58.602898+00',
    question: 'Which of the following is not a primary type of volcanic rock?'
  },
  {
    id: '89b9b3e3-3cc8-4715-80d0-44df5d1d43dc',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'What is the name of the volcanic mountain range that runs through the center of Italy?'
  },
  {
    id: '89d725ce-aae6-46ff-8123-808166a8aa99',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What is the name of the supervolcano located in the western United States, known for its massive eruptions in prehistoric times?'
  },
  {
    id: '92f7944c-f1bf-4801-bc9d-98e690a249ef',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'In which U.S. state would you find the volcanic features of Crater Lake National Park?'
  },
  {
    id: '938f60cc-e6a7-4e53-adec-c9396cfa3269',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'Which gas is commonly associated with the strong odor of rotten eggs and is released during volcanic eruptions?'
  },
  {
    id: '950aec39-ed60-4d9a-9cea-b004578a7a6a',
    created_at: '2024-02-21 16:30:03.505343+00',
    question:
      'Which U.S. national park is home to a supervolcano that last erupted about 640,000 years ago?'
  },
  {
    id: '956f744d-547f-4290-9def-c1a5940fe0a2',
    created_at: '2023-12-26 03:14:58.602898+00',
    question: 'What is the Ring of Fire?'
  },
  {
    id: '9702d1d7-7d3a-4992-8181-31c5fea3d6aa',
    created_at: '2024-02-21 18:45:21.423678+00',
    question: 'Which gas, when dissolved in magma, can contribute to explosive volcanic eruptions?'
  },
  {
    id: '97f72c78-3111-4bcd-8fcb-42258f482565',
    created_at: '2024-02-21 18:45:21.423678+00',
    question: 'In which country is Mount Teide, a prominent stratovolcano?'
  },
  {
    id: '98a0dfd0-f79b-4917-99ba-4886567b6bcd',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'Which volcano, located in Washington state, had a major eruption in 1980, causing significant changes to its landscape?'
  },
  {
    id: '9d592d71-9add-4f6b-8935-fbbbf008d21f',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What is the term for a volcanic rock formed from the cooling and solidification of lava with intermediate silica content?'
  },
  {
    id: 'a0562323-237a-47ac-bc8a-fa2ef62cb82a',
    created_at: '2023-12-26 03:15:57.740921+00',
    question: 'What is the Ring of Fire, and which ocean is it associated with?'
  },
  {
    id: 'a25ecbcf-e85f-4eb1-8180-e7c7c56b0dc8',
    created_at: '2024-02-21 16:31:14.966694+00',
    question:
      'Which type of volcano is characterized by its small size, steep sides, and explosive eruptions?'
  },
  {
    id: 'a31079ef-a771-4a6d-85aa-56c28bb57bec',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which volcanic rock is often used in construction and is characterized by its dark color and fine-grained texture?'
  },
  {
    id: 'a356ce02-7e9b-4b6c-9a59-b13c1ad8331d',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What is the term for a vent on the surface of a volcano from which volcanic gases are released?'
  },
  {
    id: 'a3df62ea-d530-489a-a3b7-9c1ccd8cf920',
    created_at: '2024-02-21 18:45:21.423678+00',
    question: 'In which ocean would you find the volcanic islands of Iceland?'
  },
  {
    id: 'a7d04336-8bd6-47e7-ba93-dc3ca3a66b68',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'What is the term for a volcano that is considered to be permanently inactive and unlikely to erupt again?'
  },
  {
    id: 'aca99f32-3610-4c1a-8db0-6d6262230672',
    created_at: '2023-12-26 03:15:57.740921+00',
    question: 'What scale is commonly used to measure the intensity of volcanic eruptions?'
  },
  {
    id: 'b2d76f61-988c-4172-9ac8-cd1cf5e0dc04',
    created_at: '2024-02-21 16:30:17.115822+00',
    question:
      'In which country is Mount Cotopaxi, one of the highest active volcanoes in the world?\n'
  },
  {
    id: 'bc8f5510-8bb2-4465-a602-2b531b3753ee',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What is the name of the underwater mountain range that includes many active and extinct volcanoes?'
  },
  {
    id: 'bd4ab682-bff5-44d5-979e-a66d07ba1fa2',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'What type of volcano is characterized by steep, conical slopes and explosive eruptions?\n'
  },
  {
    id: 'be0aba92-91be-4c9d-8f49-9d3f971ac812',
    created_at: '2024-02-21 18:45:21.423678+00',
    question: 'In which country is Mount St. Helens. a stratovolcano famous for its 1980 eruption?'
  },
  {
    id: 'be46a850-5198-4f02-a296-208818038d9e',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What is the term for a volcanic rock formed from the cooling and solidification of lava with intermediate silica content?'
  },
  {
    id: 'c0d0e4d4-0157-45d6-b599-8d9ceb9a26f3',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'In which U.S. state would you find the volcanic features of Craters of the Moon National Monument?'
  },
  {
    id: 'c0e8b690-e83a-4fee-8bec-3c532c225701',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which type of volcano is known for its broad, flattened shape and is formed by the accumulation of low-viscosity lava flows?'
  },
  {
    id: 'c12a132c-1c5f-44d0-b0b9-b2ec9ddb1d2a',
    created_at: '2024-02-21 18:45:21.423678+00',
    question: 'In which ocean is the volcanic island of Krakatoa located?'
  },
  {
    id: 'c3180e45-09c3-4fa4-a305-27ea2c93bf07',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'What is the primary factor that determines whether volcanic eruptions are explosive or effusive?'
  },
  {
    id: 'c8e819ac-7a79-429c-bf9b-17c920bdb605',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'What is the term for the opening at the top of a volcano that allows gases, ash, and lava to escape?'
  },
  {
    id: 'c9aeafb5-6413-4339-accd-099cc491b74b',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'What is the term for volcanic ash, rocks, and gas that flow down the slopes of a volcano during an eruption?'
  },
  {
    id: 'cac06308-247e-4c57-87c1-ab85df4b670c',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'Which volcanic feature is a bowl-shaped depression at the top of a volcano, typically formed during a massive eruption?'
  },
  {
    id: 'ccb68f70-d61b-43dd-9721-e1309a113e2e',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What is the term for a volcanic rock formed from the cooling and solidification of lava with high silica content?'
  },
  {
    id: 'd03cb2e3-b77a-4e41-ac03-eca8bff7df18',
    created_at: '2023-12-26 03:14:58.602898+00',
    question:
      'Which famous volcano erupted in AD 79, burying the Roman cities of Pompeii and Herculaneum?'
  },
  {
    id: 'd15116ad-c3b0-4605-a55b-173090989d86',
    created_at: '2024-02-21 16:34:32.848289+00',
    question:
      'What is the term for a volcanic vent that releases only steam and volcanic gases, without significant ash or lava emissions?'
  },
  {
    id: 'd5db3be7-45ed-485c-8ddc-21640b8e5ecd',
    created_at: '2024-02-21 18:45:21.423678+00',
    question: 'What is the term for the explosive eruption of volcanic ash'
  },
  {
    id: 'd922b2b5-4261-475c-9360-98bb2606daf9',
    created_at: '2023-12-26 03:14:58.602898+00',
    question: 'What is the largest volcano on Earth by volume, located in Hawaii?'
  },
  {
    id: 'dbece1c5-bef0-46ba-b3fb-ad0b3d475ee8',
    created_at: '2024-02-21 16:31:30.261458+00',
    question:
      'Which volcanic island in the Mediterranean is famous for the eruption that destroyed the ancient city of Akrotiri?\n'
  },
  {
    id: 'e3ad9378-45e3-4810-9fd4-4515e3168e47',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      "What is the term for a volcanic rock formed from the cooling and solidification of lava on the Earth's surface?"
  },
  {
    id: 'e3f44334-2550-454c-bbfb-1273162eb4ad',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'In which country would you find the Valley of Ten Thousand Smokes, a region formed by a massive volcanic eruption?'
  },
  {
    id: 'e83f942f-0c90-4194-841c-bda8076f794d',
    created_at: '2023-12-26 03:14:58.602898+00',
    question: 'What is the term for the molten rock expelled by a volcano during an eruption?'
  },
  {
    id: 'ea4e9696-9ba6-4228-9541-1c4b2f0d858e',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'Which type of volcano is known for its explosive eruptions, steep sides, and alternating layers of ash and lava?'
  },
  {
    id: 'ebf02606-5093-4661-a699-23247700f60d',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What is the term for a volcanic rock formed from the cooling and solidification of lava with low silica content?'
  },
  {
    id: 'efcb10e5-0af5-4d35-9570-0ad5bed6cf34',
    created_at: '2024-02-21 18:45:21.423678+00',
    question: 'In which South American country would you find the stratovolcano known as Cotopaxi?'
  },
  {
    id: 'efdcb6fb-7b73-43fb-91ce-8f9a0f5db9bc',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What volcanic feature is formed when a lava tube collapses, creating a depression or sinkhole?'
  },
  {
    id: 'f2bf99ec-7b70-495a-b148-b725da1c6b48',
    created_at: '2024-02-21 18:45:21.423678+00',
    question:
      'What is the term for a volcanic rock formed from the cooling and solidification of lava with high silica content?'
  },
  {
    id: 'f60509fa-d63a-4d56-ba8e-428df80fdfb7',
    created_at: '2024-02-21 16:24:49.316215+00',
    question:
      'What is the term for volcanic mudflow that can occur after the eruption of a volcano?'
  },
  {
    id: 'f9093024-65f3-4d1f-ba80-495a20973c11',
    created_at: '2024-02-21 16:35:18.698333+00',
    question:
      'What is the term for the volcanic rock that is a frothy, glassy lava with high gas content?'
  },
  {
    id: 'fadd4fdf-d0ba-4077-8977-900a283ddf76',
    created_at: '2023-12-26 03:15:57.740921+00',
    question:
      'What famous volcanic eruption in 1815 is known as the most powerful in recorded history?'
  }
] as const

export const highScoreSeed = [
  {
    id: '1',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '2',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '3',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '40',
    user_name: 'tj',
    score: 4
  },
  {
    id: '41',
    user_name: 'tj',
    score: 5
  },
  {
    id: '42',
    user_name: 'tj',
    score: 4
  },
  {
    id: '48',
    user_name: 'tj',
    score: 4
  },
  {
    id: '49',
    user_name: 'tj',
    score: 4
  },
  {
    id: '102',
    user_name: 'tj',
    score: 4
  },
  {
    id: '107',
    user_name: 'zakBaybaby',
    score: 4
  },
  {
    id: '109',
    user_name: 'tj',
    score: 5
  },
  {
    id: '151',
    user_name: 'tj',
    score: 5
  },
  {
    id: '153',
    user_name: 'CJC',
    score: 5
  },
  {
    id: '154',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '157',
    user_name: 'CJC',
    score: 5
  },
  {
    id: '158',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '159',
    user_name: 'tj',
    score: 4
  },
  {
    id: '160',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '161',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '162',
    user_name: 'CJC',
    score: 5
  },
  {
    id: '163',
    user_name: 'CJC',
    score: 5
  },
  {
    id: '164',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '165',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '166',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '167',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '168',
    user_name: 'CJC',
    score: 5
  },
  {
    id: '169',
    user_name: 'CJC',
    score: 5
  },
  {
    id: '170',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '171',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '172',
    user_name: 'CJC',
    score: 5
  },
  {
    id: '173',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '174',
    user_name: 'CJC',
    score: 5
  },
  {
    id: '175',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '176',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '177',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '178',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '179',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '180',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '181',
    user_name: 'CJC',
    score: 5
  },
  {
    id: '182',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '183',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '184',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '185',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '186',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '187',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '188',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '189',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '190',
    user_name: 'CJC',
    score: 4
  },
  {
    id: '191',
    user_name: 'CJC',
    score: 4
  }
] as const

export const profileSeed = [
  {
    id: '13',
    score:
      '"{\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"March 20th 2024, 4:09:41 pm\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"March 20th 2024, 5:13:03 pm\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"March 20th 2024, 5:16:53 pm\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"March 22nd 2024, 8:12:07 am\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":23,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":8,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":8,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":6,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":28,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":41,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":17,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":21,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":24,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":22,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":16,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":16,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":25,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":12,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":13,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":19,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":16,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":17,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":8,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":38,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 26th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 26th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 30th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":17,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 30th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Apr 9th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0,\\\\\\"timeStamp\\\\\\":\\\\\\"Apr 23rd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Apr 23rd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Apr 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"May 10th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"May 17th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"May 17th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"May 17th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0,\\\\\\"timeStamp\\\\\\":\\\\\\"May 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"May 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jun 3rd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jun 7th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jun 10th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Jun 10th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jun 20th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jun 20th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 2nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 17th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 18th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Aug 12th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Aug 19th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Aug 26th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Aug 26th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Sep 8th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Sep 15th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Sep 16th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 15th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 29th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Nov 12th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Nov 18th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Nov 18th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Dec 2nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Dec 2nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":6,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Dec 2nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Dec 8th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Dec 9th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Dec 16th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Dec 22nd 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Dec 29th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Dec 31st 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jan 8th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jan 14th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jan 21st 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Jan 27th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Feb 18th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Feb 18th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Feb 26th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 14th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 14th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 20th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 20th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 27th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Apr 2nd 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Apr 2nd 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Apr 8th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"May 6th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"May 13th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jun 15th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jun 15th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jun 24th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Jun 24th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 1st 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 1st 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 14th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 18th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 18th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 18th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 18th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 24th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 24th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 31st 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 31st 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Jul 31st 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Aug 7th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Aug 21st 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Aug 21st 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Aug 26th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"Aug 26th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 9th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 9th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 9th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 18th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 20th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 20th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":7,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 20th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Oct 28th 25\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Nov 1st 25\\\\\\"}\\"]}',
    user_id: '17df1da4-e0c2-4201-b897-e6577c435d81',
    display_name: 'CJC'
  },
  {
    id: '16',
    score:
      '"{\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":5,\\\\\\"incorrect\\\\\\":0}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"March 20th 2024, 6:28:06 pm\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"March 20th 2024, 6:29:53 pm\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2,\\\\\\"timeStamp\\\\\\":\\\\\\"March 22nd 2024, 1:34:53 pm\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":8,\\\\\\"incorrect\\\\\\":10,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 24th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\"]}',
    user_id: 'ba172cd7-22d5-4585-af0a-568c3488e842',
    display_name: 'tj'
  },
  {
    id: '18',
    score:
      '"{\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\"]}',
    user_id: '5a34e587-9125-47e4-86c1-d4ddf54a6fb1',
    display_name: 'Sonya'
  },
  {
    id: '25',
    score: '"{]}',
    user_id: '1366045e-8aaa-4163-8ff9-8b915636f669',
    display_name: 'test'
  },
  {
    id: '27',
    score:
      '"{\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\",\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\"]}',
    user_id: '1afb8e6b-826d-4780-8f60-9d3b47457ea1',
    display_name: 'test'
  },
  {
    id: '28',
    score:
      '"{\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\"]}',
    user_id: '3e0901d0-ea3f-450b-ab0d-a42c98b1f9a8',
    display_name: 'jonnyboy1000@gmail.com'
  },
  {
    id: '29',
    score:
      '"{\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":2,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\"]}',
    user_id: '7866f279-f007-4263-bfab-3164d5275150',
    display_name: 'jonny'
  },
  {
    id: '30',
    score:
      '"{\\"{\\\\\\"correct\\\\\\":0,\\\\\\"incorrect\\\\\\":3}\\",\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3}\\"]}',
    user_id: '72963695-910e-43e3-b509-235739bcc9d2',
    display_name: 'jon@jon.com'
  },
  {
    id: '31',
    score: '"{\\"{\\\\\\"correct\\\\\\":4,\\\\\\"incorrect\\\\\\":1}\\"]}',
    user_id: 'ba03748b-dba4-4a2d-a76c-5502bf21e37b',
    display_name: 'zakBaybaby'
  },
  {
    id: '32',
    score: '"{\\"{\\\\\\"correct\\\\\\":3,\\\\\\"incorrect\\\\\\":2}\\"]}',
    user_id: '506052c6-5894-46a9-9024-96ceafa4ff47',
    display_name: 'fireman'
  },
  {
    id: '34',
    score:
      '"{\\"{\\\\\\"correct\\\\\\":1,\\\\\\"incorrect\\\\\\":3,\\\\\\"timeStamp\\\\\\":\\\\\\"Mar 25th 24\\\\\\"}\\"]}',
    user_id: '919033d1-3f4c-4249-b679-4f6bbc130d0c',
    display_name: 'BAY'
  }
] as const

export const seedAll = mutation({
  args: {},
  handler: async (ctx) => {
    // ---- 1) Seed questions and build a map from old Postgres id -> Convex Id ----
    const questionIdMap = new Map<string, GenericId<'questions'>>()

    for (const q of questionsSeed) {
      const newId = await ctx.db.insert('questions', {
        // your schema only has `question`
        question: q.question
      })

      // store mapping so we can connect answers -> questions
      questionIdMap.set(q.id, newId)
    }

    // ---- 2) Seed answers, wired up to questions via questionId ----
    for (const a of answersSeed) {
      const questionId = questionIdMap.get(a.question_foreign_key)

      if (!questionId) {
        // If there's a mismatch, you can either skip or throw:
        console.warn(
          'No question found for answer with question_foreign_key',
          a.question_foreign_key
        )
        continue
      }

      await ctx.db.insert('answers', {
        questionId,
        answers: a.answers,
        correctAnswer: a.correct_answer
      })
    }

    // ---- 3) Seed high scores -> highScores table ----
    for (const hs of highScoreSeed) {
      await ctx.db.insert('highScores', {
        userName: hs.user_name,
        score: hs.score
      })
    }

    // ---- 4) Seed profiles, parsing the big score string into scores[] ----
    for (const p of profileSeed) {
      let scores: { correct: number; incorrect: number; timeStamp: string }[] = []

      try {
        if (p.score) {
          // p.score is a giant JSON-ish string from Postgres.
          // Example shape: "[\"{\\\"correct\\\":1,\\\"incorrect\\\":3}\", ...]"
          // 1) Parse to string[]
          const arr = JSON.parse(p.score) as string[]

          // 2) Parse each inner JSON string to an object
          scores = arr.map((s) => {
            const obj = JSON.parse(s) as {
              correct: number
              incorrect: number
              timeStamp?: string
            }

            return {
              correct: obj.correct,
              incorrect: obj.incorrect,
              // your schema requires timeStamp: string (not optional), so default if missing
              timeStamp: obj.timeStamp ?? ''
            }
          })
        }
      } catch (err) {
        console.error('Failed to parse scores for profile', p.id, err)
        // If parsing fails, we'll just leave scores = []
      }

      await ctx.db.insert('profiles', {
        userId: p.user_id,
        displayName: p.display_name,
        scores
      })
    }
  }
})
