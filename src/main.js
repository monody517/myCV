var myChart = echarts.init(document.getElementById('skills'));
option = {
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '静态页面', max: 100},
            { name: '编程基础', max: 100},
            { name: 'Vue', max: 100},
            { name: 'React', max: 100},
            { name: '项目开发', max: 100},
            { name: '沟通能力', max: 100}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        data: [
            {
                value: [100, 70, 85, 80, 85, 85],
                name: '能力雷达'
            }
        ]
    }]
};
myChart.setOption(option);