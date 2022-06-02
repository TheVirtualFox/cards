import {Card, Transaction} from '../models';

const transactions: Transaction[] = [
    {
        "amount": 35,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Lakisha Kerr",
        "transactionDate": "2021-01-24T08:57:58",
        "transactionID": "629869b21a7208246f67dd0c"
    },
    {
        "amount": 25,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Hubbard Mitchell",
        "transactionDate": "2021-11-25T08:28:10",
        "transactionID": "629869b247b01ac90636e53c"
    },
    {
        "amount": 22,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Bradshaw Sullivan",
        "transactionDate": "2019-02-23T11:53:03",
        "transactionID": "629869b27098c9cf2e69b223"
    },
    {
        "amount": 28,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Hinton Buck",
        "transactionDate": "2022-05-17T02:39:34",
        "transactionID": "629869b2a8cc8ca4eb03c4df"
    },
    {
        "amount": 33,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Karen Howard",
        "transactionDate": "2016-10-04T04:25:34",
        "transactionID": "629869b23d2623e433c24b16"
    },
    {
        "amount": 25,
        "cardAccount": "badd7f9b-7e97-44c4-935f-dc9deaceee4f",
        "cardID": "62986fcc2f925570474fca1a",
        "currency": "USD",
        "merchantInfo": "Dorsey Ingram",
        "transactionDate": "2018-01-20T05:55:42",
        "transactionID": "629869b28b5a653cdf9b5c33"
    },
    {
        "amount": 25,
        "cardAccount": "badd7f9b-7e97-44c4-935f-dc9deaceee4f",
        "cardID": "62986fcc2f925570474fca1a",
        "currency": "USD",
        "merchantInfo": "Anita Peck",
        "transactionDate": "2021-05-18T03:40:56",
        "transactionID": "629869b2e093d8df5c016038"
    },
    {
        "amount": 36,
        "cardAccount": "badd7f9b-7e97-44c4-935f-dc9deaceee4f",
        "cardID": "62986fcc2f925570474fca1a",
        "currency": "USD",
        "merchantInfo": "Pearson French",
        "transactionDate": "2021-10-08T03:18:41",
        "transactionID": "629869b2121d147796431eaa"
    },
    {
        "amount": 38,
        "cardAccount": "badd7f9b-7e97-44c4-935f-dc9deaceee4f",
        "cardID": "62986fcc2f925570474fca1a",
        "currency": "USD",
        "merchantInfo": "Baker Nguyen",
        "transactionDate": "2014-03-01T05:57:21",
        "transactionID": "629869b26d60cacc75e24f05"
    },
    {
        "amount": 24,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "merchantInfo": "Pauline Massey",
        "transactionDate": "2015-09-16T06:24:26",
        "transactionID": "629869b2fe60f88d26fa5760"
    },
    {
        "amount": 28,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "merchantInfo": "Aisha Hutchinson",
        "transactionDate": "2015-04-11T11:38:30",
        "transactionID": "629869b2ecf3e4100b90ac86"
    },
    {
        "amount": 25,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "merchantInfo": "Mcclain Freeman",
        "transactionDate": "2019-01-15T02:42:19",
        "transactionID": "629869b2e8aa593b225a845d"
    },
    {
        "amount": 29,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "merchantInfo": "Myrna Valencia",
        "transactionDate": "2014-12-04T08:51:22",
        "transactionID": "629869b21187089fc99f0b2e"
    },
    {
        "amount": 34,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "merchantInfo": "Francis White",
        "transactionDate": "2015-01-31T06:58:06",
        "transactionID": "629869b227276b3ad6c2094f"
    },
    {
        "amount": 22,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "merchantInfo": "Morrison Munoz",
        "transactionDate": "2014-04-27T05:20:08",
        "transactionID": "629869b28216e7073b928e98"
    },
    {
        "amount": 28,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "merchantInfo": "Latasha Miles",
        "transactionDate": "2016-09-29T09:31:14",
        "transactionID": "629869b2912bdbfd06cf4749"
    },
    {
        "amount": 30,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "merchantInfo": "Mcbride Ellis",
        "transactionDate": "2016-01-27T01:27:52",
        "transactionID": "629869b2ed46709a859c73cf"
    },
    {
        "amount": 39,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "merchantInfo": "Lynne Chapman",
        "transactionDate": "2020-11-06T10:46:02",
        "transactionID": "629869b225c8d1990fcc5f30"
    },
    {
        "amount": 32,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "merchantInfo": "Kimberley Duran",
        "transactionDate": "2021-07-20T03:37:41",
        "transactionID": "629869b2f9eb396cede5b75f"
    },
    {
        "amount": 24,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "merchantInfo": "Janice Vargas",
        "transactionDate": "2015-09-28T08:48:04",
        "transactionID": "629869b249596afe69896ea3"
    },
    {
        "amount": 36,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "merchantInfo": "Carlson Hood",
        "transactionDate": "2017-06-18T01:59:11",
        "transactionID": "629869b2edb1b6fbda76949e"
    },
    {
        "amount": 33,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "merchantInfo": "Lancaster Mcclure",
        "transactionDate": "2017-01-08T01:14:28",
        "transactionID": "629869b26440e0f24955893c"
    },
    {
        "amount": 40,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "merchantInfo": "Powers Weber",
        "transactionDate": "2019-03-05T04:36:24",
        "transactionID": "629869b276aacd03fd8913e7"
    },
    {
        "amount": 35,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "merchantInfo": "Andrea Johns",
        "transactionDate": "2018-01-05T08:52:05",
        "transactionID": "629869b21ea0c9782ab8e13f"
    },
    {
        "amount": 28,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "merchantInfo": "Thornton Green",
        "transactionDate": "2016-04-13T04:31:04",
        "transactionID": "629869b299d9cc578bc0c9f7"
    },
    {
        "amount": 32,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "merchantInfo": "Samantha Macdonald",
        "transactionDate": "2016-07-26T10:47:42",
        "transactionID": "629869b2697c8454fb017d4e"
    },
    {
        "amount": 32,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "merchantInfo": "Ross Byers",
        "transactionDate": "2020-07-01T08:33:05",
        "transactionID": "629869b208fa9b5c8c520c7c"
    },
    {
        "amount": 20,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "merchantInfo": "Lea Burke",
        "transactionDate": "2016-11-29T04:05:18",
        "transactionID": "629869b219e24b6d17768425"
    },
    {
        "amount": 38,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "merchantInfo": "Sanders Combs",
        "transactionDate": "2017-09-13T03:04:26",
        "transactionID": "629869b26b9168f777519304"
    },
    {
        "amount": 30,
        "cardAccount": "0d1b61fa-8f47-43a0-b366-963ebeb58348",
        "cardID": "62986fcc2aca14a89d36824a",
        "currency": "USD",
        "merchantInfo": "Sharron Ortiz",
        "transactionDate": "2022-05-24T05:13:54",
        "transactionID": "629869b23f8f7e80f4dfc97e"
    },
    {
        "amount": 35,
        "cardAccount": "0d1b61fa-8f47-43a0-b366-963ebeb58348",
        "cardID": "62986fcc2aca14a89d36824a",
        "currency": "USD",
        "merchantInfo": "Jerri Wall",
        "transactionDate": "2019-03-06T11:12:49",
        "transactionID": "629869b2385bbb5eb775bd6b"
    },
    {
        "amount": 35,
        "cardAccount": "0d1b61fa-8f47-43a0-b366-963ebeb58348",
        "cardID": "62986fcc2aca14a89d36824a",
        "currency": "USD",
        "merchantInfo": "Eunice Ford",
        "transactionDate": "2018-10-22T09:35:58",
        "transactionID": "629869b2ba43a6e881d37294"
    },
    {
        "amount": 37,
        "cardAccount": "0d1b61fa-8f47-43a0-b366-963ebeb58348",
        "cardID": "62986fcc2aca14a89d36824a",
        "currency": "USD",
        "merchantInfo": "Michael Britt",
        "transactionDate": "2017-05-20T12:45:42",
        "transactionID": "629869b2b64cd2cdf40afb5d"
    },
    {
        "amount": 23,
        "cardAccount": "0d1b61fa-8f47-43a0-b366-963ebeb58348",
        "cardID": "62986fcc2aca14a89d36824a",
        "currency": "USD",
        "merchantInfo": "Gutierrez Randolph",
        "transactionDate": "2017-10-27T11:00:22",
        "transactionID": "629869b2e0a9ff0ecae1e549"
    },
    {
        "amount": 23,
        "cardAccount": "0d1b61fa-8f47-43a0-b366-963ebeb58348",
        "cardID": "62986fcc2aca14a89d36824a",
        "currency": "USD",
        "merchantInfo": "Stark Warner",
        "transactionDate": "2021-06-16T03:34:47",
        "transactionID": "629869b2ece778c32397f024"
    },
    {
        "amount": 31,
        "cardAccount": "0d1b61fa-8f47-43a0-b366-963ebeb58348",
        "cardID": "62986fcc2aca14a89d36824a",
        "currency": "USD",
        "merchantInfo": "Brown Poole",
        "transactionDate": "2020-06-15T01:46:37",
        "transactionID": "629869b25fd29b1cc02bfd41"
    },
    {
        "amount": 28,
        "cardAccount": "586b36a7-f071-415a-b101-3704ca5e95d6",
        "cardID": "62986fcc7f98655b84e0556b",
        "currency": "USD",
        "merchantInfo": "Ella Owens",
        "transactionDate": "2018-12-06T11:41:40",
        "transactionID": "629869b23bc242f3bc3287be"
    },
    {
        "amount": 37,
        "cardAccount": "586b36a7-f071-415a-b101-3704ca5e95d6",
        "cardID": "62986fcc7f98655b84e0556b",
        "currency": "USD",
        "merchantInfo": "Kate Mcbride",
        "transactionDate": "2021-06-15T12:35:04",
        "transactionID": "629869b2d598a831baafeb18"
    },
    {
        "amount": 22,
        "cardAccount": "586b36a7-f071-415a-b101-3704ca5e95d6",
        "cardID": "62986fcc7f98655b84e0556b",
        "currency": "USD",
        "merchantInfo": "Ruthie Roman",
        "transactionDate": "2015-05-07T04:42:57",
        "transactionID": "629869b2894c205a75c0e34b"
    },
    {
        "amount": 40,
        "cardAccount": "586b36a7-f071-415a-b101-3704ca5e95d6",
        "cardID": "62986fcc7f98655b84e0556b",
        "currency": "USD",
        "merchantInfo": "Abby Holland",
        "transactionDate": "2015-11-29T12:43:24",
        "transactionID": "629869b2eddc52e39a72b531"
    },
    {
        "amount": 27,
        "cardAccount": "586b36a7-f071-415a-b101-3704ca5e95d6",
        "cardID": "62986fcc7f98655b84e0556b",
        "currency": "USD",
        "merchantInfo": "Casandra Carroll",
        "transactionDate": "2015-07-19T08:56:16",
        "transactionID": "629869b20b3dcfdff09be127"
    },
    {
        "amount": 31,
        "cardAccount": "586b36a7-f071-415a-b101-3704ca5e95d6",
        "cardID": "62986fcc7f98655b84e0556b",
        "currency": "USD",
        "merchantInfo": "Pena Mccullough",
        "transactionDate": "2020-06-27T09:11:09",
        "transactionID": "629869b20d343fbebaeddc1c"
    },
    {
        "amount": 20,
        "cardAccount": "586b36a7-f071-415a-b101-3704ca5e95d6",
        "cardID": "62986fcc7f98655b84e0556b",
        "currency": "USD",
        "merchantInfo": "Haley Ryan",
        "transactionDate": "2016-08-29T11:11:04",
        "transactionID": "629869b27f3d99de102d0ecb"
    },
    {
        "amount": 32,
        "cardAccount": "2412e6f3-75a3-4885-95c2-d55231fdb0b8",
        "cardID": "62986fccb11775f8d04f6142",
        "currency": "USD",
        "merchantInfo": "Guzman Saunders",
        "transactionDate": "2020-12-10T10:35:38",
        "transactionID": "629869b26d2038fd06b32908"
    },
    {
        "amount": 33,
        "cardAccount": "2412e6f3-75a3-4885-95c2-d55231fdb0b8",
        "cardID": "62986fccb11775f8d04f6142",
        "currency": "USD",
        "merchantInfo": "Mcintosh Bird",
        "transactionDate": "2014-06-25T02:01:21",
        "transactionID": "629869b24bce1c5f248ebd0c"
    },
    {
        "amount": 33,
        "cardAccount": "2412e6f3-75a3-4885-95c2-d55231fdb0b8",
        "cardID": "62986fccb11775f8d04f6142",
        "currency": "USD",
        "merchantInfo": "Rice Hester",
        "transactionDate": "2022-03-04T04:59:51",
        "transactionID": "629869b230f76f49f5aff45d"
    },
    {
        "amount": 21,
        "cardAccount": "2412e6f3-75a3-4885-95c2-d55231fdb0b8",
        "cardID": "62986fccb11775f8d04f6142",
        "currency": "USD",
        "merchantInfo": "Alana Moss",
        "transactionDate": "2020-09-21T03:58:44",
        "transactionID": "629869b2b1a344c0b727d084"
    },
    {
        "amount": 39,
        "cardAccount": "2412e6f3-75a3-4885-95c2-d55231fdb0b8",
        "cardID": "62986fccb11775f8d04f6142",
        "currency": "USD",
        "merchantInfo": "Cross Patrick",
        "transactionDate": "2017-10-19T09:57:03",
        "transactionID": "629869b2a88c1448520524d8"
    },
    {
        "amount": 28,
        "cardAccount": "2412e6f3-75a3-4885-95c2-d55231fdb0b8",
        "cardID": "62986fccb11775f8d04f6142",
        "currency": "USD",
        "merchantInfo": "Wright Guy",
        "transactionDate": "2015-05-22T07:22:16",
        "transactionID": "629869b289b7d58f9a9f92a9"
    },
    {
        "amount": 28,
        "cardAccount": "2412e6f3-75a3-4885-95c2-d55231fdb0b8",
        "cardID": "62986fccb11775f8d04f6142",
        "currency": "USD",
        "merchantInfo": "Mueller Bishop",
        "transactionDate": "2019-06-03T08:33:23",
        "transactionID": "629869b2aaa9a92583519bf0"
    },
    {
        "amount": 28,
        "cardAccount": "7782d279-8814-4698-92e0-07dc5bd00a02",
        "cardID": "62986fcc6920e0205535ba45",
        "currency": "EUR",
        "merchantInfo": "Lesa Marks",
        "transactionDate": "2014-06-09T03:37:32",
        "transactionID": "629869b2e0d72ec49c5dc900"
    },
    {
        "amount": 24,
        "cardAccount": "7782d279-8814-4698-92e0-07dc5bd00a02",
        "cardID": "62986fcc6920e0205535ba45",
        "currency": "EUR",
        "merchantInfo": "Casey Velasquez",
        "transactionDate": "2018-06-15T12:51:42",
        "transactionID": "629869b250658b0c4606b74e"
    },
    {
        "amount": 22,
        "cardAccount": "7782d279-8814-4698-92e0-07dc5bd00a02",
        "cardID": "62986fcc6920e0205535ba45",
        "currency": "EUR",
        "merchantInfo": "Elisa Benjamin",
        "transactionDate": "2021-02-19T07:55:05",
        "transactionID": "629869b2a6ed59ff483cb486"
    },
    {
        "amount": 27,
        "cardAccount": "7782d279-8814-4698-92e0-07dc5bd00a02",
        "cardID": "62986fcc6920e0205535ba45",
        "currency": "EUR",
        "merchantInfo": "Keith Ross",
        "transactionDate": "2017-11-16T02:59:02",
        "transactionID": "629869b2459967f67d30585c"
    },
    {
        "amount": 33,
        "cardAccount": "7782d279-8814-4698-92e0-07dc5bd00a02",
        "cardID": "62986fcc6920e0205535ba45",
        "currency": "EUR",
        "merchantInfo": "Palmer Taylor",
        "transactionDate": "2017-11-14T04:31:41",
        "transactionID": "629869b259ad59db648cd1e9"
    },
    {
        "amount": 26,
        "cardAccount": "7782d279-8814-4698-92e0-07dc5bd00a02",
        "cardID": "62986fcc6920e0205535ba45",
        "currency": "EUR",
        "merchantInfo": "Solomon Sosa",
        "transactionDate": "2014-11-03T08:12:48",
        "transactionID": "629869b239bbd994c5bf2ffa"
    },
    {
        "amount": 29,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Jennifer Harding",
        "transactionDate": "2020-11-11T02:47:39",
        "transactionID": "629869b2dda846003dcb789a"
    },
    {
        "amount": 38,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Bender Tyler",
        "transactionDate": "2018-06-23T12:25:03",
        "transactionID": "629869b23566f2effa6a0ac5"
    },
    {
        "amount": 20,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Robyn Downs",
        "transactionDate": "2020-04-18T08:07:56",
        "transactionID": "629869b22035e93cf546bdf5"
    },
    {
        "amount": 26,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Jessie Walker",
        "transactionDate": "2017-01-28T04:35:00",
        "transactionID": "629869b2a90e26766a846332"
    },
    {
        "amount": 35,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Welch York",
        "transactionDate": "2019-09-18T06:05:02",
        "transactionID": "629869b2e5ac7135f7fa45d9"
    },
    {
        "amount": 26,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Leach Sykes",
        "transactionDate": "2019-05-05T09:11:34",
        "transactionID": "629869b2390a9008ff17f3da"
    },
    {
        "amount": 24,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Adele Rutledge",
        "transactionDate": "2014-01-30T12:34:24",
        "transactionID": "629869b250906fbc958ee618"
    },
    {
        "amount": 40,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "merchantInfo": "Serrano Fitzpatrick",
        "transactionDate": "2022-05-06T05:15:37",
        "transactionID": "629869b2a3df900ac9f5c807"
    }
];

const cards: Card[] = [
    {
        "balance": 1475730689,
        "cardAccount": "5605e803-8fcd-45ea-8be1-776ba59473e4",
        "cardID": "62986fccaad44417f5cf6c9a",
        "currency": "USD",
        "expireDate": "2019-11-08T12:41:24",
        "maskedCardNumber": "5999",
        "status": "active"
    },
    {
        "balance": 944035562,
        "cardAccount": "badd7f9b-7e97-44c4-935f-dc9deaceee4f",
        "cardID": "62986fcc2f925570474fca1a",
        "currency": "USD",
        "expireDate": "2021-08-05T08:26:16",
        "maskedCardNumber": "5208",
        "status": "blocked"
    },
    {
        "balance": 56512568,
        "cardAccount": "962e1877-4f13-409c-af3f-2739bc2ca0a2",
        "cardID": "62986fcc4c39ab2345b2f4d4",
        "currency": "EUR",
        "expireDate": "2017-12-13T01:38:41",
        "maskedCardNumber": "5164",
        "status": "active"
    },
    {
        "balance": 3994376790,
        "cardAccount": "5a7b2bb6-ce59-479c-b381-e39b545a05b7",
        "cardID": "62986fccaac280e8524d5c29",
        "currency": "AZN",
        "expireDate": "2017-04-11T05:01:57",
        "maskedCardNumber": "1653",
        "status": "active"
    },
    {
        "balance": 2866535672,
        "cardAccount": "0d1b61fa-8f47-43a0-b366-963ebeb58348",
        "cardID": "62986fcc2aca14a89d36824a",
        "currency": "USD",
        "expireDate": "2017-02-24T12:29:29",
        "maskedCardNumber": "9946",
        "status": "active"
    },
    {
        "balance": 2363504888,
        "cardAccount": "586b36a7-f071-415a-b101-3704ca5e95d6",
        "cardID": "62986fcc7f98655b84e0556b",
        "currency": "USD",
        "expireDate": "2017-08-07T11:05:05",
        "maskedCardNumber": "2257",
        "status": "active"
    },
    {
        "balance": 3580496249,
        "cardAccount": "2412e6f3-75a3-4885-95c2-d55231fdb0b8",
        "cardID": "62986fccb11775f8d04f6142",
        "currency": "USD",
        "expireDate": "2022-05-20T01:17:56",
        "maskedCardNumber": "4940",
        "status": "active"
    },
    {
        "balance": 1858535959,
        "cardAccount": "7782d279-8814-4698-92e0-07dc5bd00a02",
        "cardID": "62986fcc6920e0205535ba45",
        "currency": "EUR",
        "expireDate": "2016-07-01T05:10:24",
        "maskedCardNumber": "4151",
        "status": "blocked"
    }
]


export const DB = {transactions, cards};
