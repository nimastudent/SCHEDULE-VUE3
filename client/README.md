1. 课程表 -》 单击单元格  =》 新增课程/编辑课程 =》 课程/老师


2. 数据
    - 周
    {
        title:周一,
        id:1
    }
    - 时间段
    {
        title:'08:00 - 08:50',
        begin_time: timeStamp,
    }

    联合键 begin_timeId
    - 课程
    {
        name:'',
        id:1
    }
    - 老师
    {
        name:'',
        id:1
    }
    - 计划数据
    {
        begin_time,
        weekDay,
        course,
        teacher,
        id
    }
