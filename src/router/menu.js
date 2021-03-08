const menu = [
    {
        id: 1,
        pid: null,
        name: "列表",
        children: [
            {
                id: 2,
                pid: 1,
                name: "列表1",
            },
            {
                id: 3,
                pid: 1,
                name: "列表2",
            },
            {
                id: 4,
                pid: 1,
                name: "列表3",
            }
        ]
    },
    {
        id: 5,
        pid: null,
        name: "列表",
        children: [
            {
                id: 6,
                pid: 5,
                name: "列表1",
            },
            {
                id: 7,
                pid: 5,
                name: "列表2",
            },
            {
                id: 8,
                pid: 5,
                name: "列表3",
            }
        ]
    },
    {
        id: 9,
        pid: null,
        name: "列表",
        children: [
            {
                id: 10,
                pid: 9,
                name: "列表1",
            },
            {
                id: 11,
                pid: 9,
                name: "列表2",
            },
            {
                id: 12,
                pid: 9,
                name: "列表3",
            }
        ]
    }
]

export default menu;
