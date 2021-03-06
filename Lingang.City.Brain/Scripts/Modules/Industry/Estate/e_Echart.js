﻿define(["config", "common", "e_EchartAjax"], function (con, com, e_EchartAjax) {
    var gauge_value = 0;
    /****************************产业****************************/
    return {
        myChartcyjzl: null,//产业竞争力
        myChartqybhqs: null,//企业变化趋势
        qybhqsData: null,//企业变化趋势数据
        ssbhqsData: null,//税收变化趋势数据
        myChartssbhqs: null,//税收变化趋势
        gtbhqsData:null,//固投变化趋势数据
        myChartgtbhqs: null,//固投变化趋势
        jyjhbhqsData:null,//就业机会数据
        myChartjyjh: null,//就业机会
        myChartxzsp: null,//薪资水平
        xzspbhqsData: null,//薪资水平数据
        myChartgccrc: null,//高层次人才
        gccrcData: null,//高层次人才数据
        myChartleida: null,//风控雷达
        fkldInterval: null,//雷达计时器

        //加载图表
        loadEcharts:function()
        {
            //require("e_Echart").leida();
            //require("e_Echart").jyjh();
            //require("e_Echart").xzsp();
            //require("e_Echart").gccrc();
        },
        //产业竞争力
        cyjzl: function () {
            if ($("#cyjzl-chart").length <= 0) { return false; }
            $.ajax({
                type: 'POST',
                url: 'http://47.101.181.131:8091/v1/industrial/matchIndex',
                cache: false,

                // data:post_data,
                dataType: 'json',
                success: function (data) {
                    
                    var cyjzlChart = document.getElementById('cyjzl-chart');
                    var Max = 100;
                    var Value = [data.data[2].score, data.data[1].score, data.data[0].score, data.data[3].score, data.data[4].score];
                    require("e_Echart").myChartcyjzl = echarts.init(cyjzlChart);

                    cyjzlOption = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            show: false
                        },
                        radar: [
                            {
                                indicator: [
                                    { text: data.data[2].model_item_name, max: Max },
                                    { text: data.data[1].model_item_name, max: Max },
                                    { text: data.data[0].model_item_name, max: Max },
                                    { text: data.data[3].model_item_name, max: Max },
                                    { text: data.data[4].model_item_name, max: Max }
                                ],
                                name: {
                                    formatter: '【{value}】',
                                    textStyle: {
                                        color: '#0ff',
                                        fontSize: 30
                                    }
                                },
                                radius: 180,
                                center: ['50%', '55%'],
                                axisLine: {
                                    lineStyle: {
                                        width: 2,
                                    },
                                },
                                splitLine: {
                                    lineStyle: {
                                        width: 2,
                                    },
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: "transparent",
                                    },
                                },
                            }
                        ],
                        series: [
                            {
                                type: 'radar',
                                data: [
                                    {
                                        value: Value,
                                        areaStyle: {
                                            normal: {
                                                color: 'rgba(235,182,0,.4)'
                                            }
                                        },
                                        lineStyle: {
                                            normal: {
                                                width: 6,
                                                color: "rgba(235,182,0,1)"
                                            }
                                        }
                                    }
                                ],
                            }
                        ]
                    };
                      require("e_Echart").myChartcyjzl.setOption(cyjzlOption);
                },
                error: function () {
                    var cyjzlChart = document.getElementById('cyjzl-chart');
                    var Max = 100;
                    var Value = [54, 25, 68, 38, 73];
                    require("e_Echart").myChartcyjzl = echarts.init(cyjzlChart);

                    cyjzlOption = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            show: false
                        },
                        radar: [
                            {
                                indicator: [
                                    { text: '产业聚集性', max: Max },
                                    { text: '规模竞争力', max: Max },
                                    { text: '技术领先性', max: Max },
                                    { text: '产业均衡性', max: Max },
                                    { text: '产业前瞻性', max: Max }
                                ],
                                name: {
                                    formatter: '【{value}】',
                                    textStyle: {
                                        color: '#0ff',
                                        fontSize: 30
                                    }
                                },
                                radius: 180,
                                center: ['50%', '55%'],
                                axisLine: {
                                    lineStyle: {
                                        width: 2,
                                    },
                                },
                                splitLine: {
                                    lineStyle: {
                                        width: 2,
                                    },
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: "transparent",
                                    },
                                },
                            }
                        ],
                        series: [
                            {
                                type: 'radar',
                                data: [
                                    {
                                        value: Value,
                                        areaStyle: {
                                            normal: {
                                                color: 'rgba(235,182,0,.4)'
                                            }
                                        },
                                        lineStyle: {
                                            normal: {
                                                width: 6,
                                                color: "rgba(235,182,0,1)"
                                            }
                                        }
                                    }
                                ],
                            }
                        ]
                    };
                    require("e_Echart").myChartcyjzl.setOption(cyjzlOption);
                }
            })
           
          
        },

        //战略新兴产业
        //zlxxcy: function ()
        //{
        //        var zlxxcyNumHtmlArr = [];
        //        var zlxxcyNumHtmlArrLength2 = 0;
        //        var zlxxcyRightTimer = null;

        //        zlxxcyRightTimer = setInterval(function(){

        //        $(".zlxxcy-bar").each(function(index,element){
        //            var thisRandom = parseInt(Math.random()*100);
        //            var zlxxcyNumTimer = null;

        //            if($(this).parent().width() >=  $(this).width() + thisRandom){
        //                $(this).width( $(this).width() + thisRandom);
        //                zlxxcyNumTimer = setInterval(function(){
        //                    $(element).find("span").html( parseInt($(element).width()*100) );
        //                    zlxxcyNumHtmlArr.push($(element).find("span").html())
        //                },100)
        //            }else{
        //                clearInterval(zlxxcyRightTimer)
        //                clearInterval(zlxxcyNumTimer)
        //            }
        //        })

        //        $(".zlxxcy-year").html( +$(".zlxxcy-year").html() + 1 );
        //        },1000)
        //},
        //企业变化趋势
        qybhqs: function () {
            if ($("#qybhqs-chart").length <= 0) { return false; }
            var qybhqsChart = document.getElementById('qybhqs-chart');
            e_EchartAjax.qybhqs(function (result) {
                if (require("e_Echart").qybhqsData == null) { return false; }
                var data = require("e_Echart").qybhqsData;
                var arrvalue = [data[0].COUNT, data[1].COUNT, data[2].COUNT, data[3].COUNT, data[4].COUNT]
                var arryear = [data[0].year, data[1].year, data[2].year, data[3].year, data[4].year]
                
                require("e_Echart").myChartqybhqs = echarts.init(qybhqsChart);
                qybhqsOption = {
                    legend: {
                        show: false
                    },
                    color: ['#02d8e3'],
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "88%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                show: false,
                            }

                        },
                    },
                    xAxis: {
                        type: 'category',
                        nameLocation: "start",
                        data: arryear,
                        boundaryGap: ["5%", "5%"],
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        }

                    },
                    yAxis: {
                        name: "        (企业数/千)",
                        nameTextStyle: {
                            color: "#00d7fe",
                            fontSize: 22,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 10,
                        //max: 90,
                        axisLabel: {
                            formatter: function (value, index) {
                                
                                    value = value / 1000;
                                
                                return value;
                            },
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(74,128,244,.1)",
                              }, {
                                  offset: 1,
                                  color: "rgba(74,128,244,.3)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                require("e_Echart").myChartqybhqs.setOption(qybhqsOption);
            })
        },
        //税收变化趋势
        ssbhqs: function () {
            if ($("#ssbhqs-chart").length <= 0) { return false; }
            var ssbhqsChart = document.getElementById('ssbhqs-chart');
            e_EchartAjax.ssbhqs(function (result) {

                if (require("e_Echart").ssbhqsData == null) { return false; }
                var data = require("e_Echart").ssbhqsData;
                var arrvalue = [data[0].COUNT, data[1].COUNT, data[2].COUNT, data[3].COUNT, ]
                var arryear = [data[0].year, data[1].year, data[2].year, data[3].year, ]
                require("e_Echart").myChartssbhqs = echarts.init(ssbhqsChart);
                ssbhqsOption = {
                    legend: {
                        show: false
                    },
                    color: ['#02d8e3'],
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "88%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                show: false,
                            }

                        },
                    },
                    xAxis: {
                        show: true,
                        type: 'category',
                        data: arryear,
                        boundaryGap: ["5%", "5%"],
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        }

                    },
                    yAxis: {
                        name: "        (金额/亿)",
                        nameTextStyle: {
                            color: "#00d7fe",
                            fontSize: 22,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 10,
                        //max: 90,
                        axisLabel: {
                            formatter: function (value, index) {
                                if (value >= 100000000) {
                                    value = value / 100000000;
                                }
                                return value;
                            },
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          //smooth:true,
                          //color:"rgba(7,196,230,1)",
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(74,128,244,.1)",
                              }, {
                                  offset: 1,
                                  color: "rgba(74,128,244,.3)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                require("e_Echart").myChartssbhqs.setOption(ssbhqsOption);

            })

        },
        //固投变化趋势
        gtbhqs: function () {
            if ($("#gtbhqs-chart").length <= 0) { return false; }
            e_EchartAjax.gtbhqs(function (result) {
                if (require("e_Echart").gtbhqsData == null) { return false; }
                var gtbhqsChart = document.getElementById('gtbhqs-chart');
                var data = require("e_Echart").gtbhqsData;
                    var gtbhqsdata = [
                        parseInt(data.investmentInfo['2009年']), parseInt(data.investmentInfo['2010年']), parseInt(data.investmentInfo['2011年']),
                        parseInt(data.investmentInfo['2012年']), parseInt(data.investmentInfo['2013年']), parseInt(data.investmentInfo['2014年']),
                        parseInt(data.investmentInfo['2015年']), parseInt(data.investmentInfo['2016年']), parseInt(data.investmentInfo['2017年']),
                        parseInt(data.investmentInfo['2018年'])
                    ];
                   
                    require("e_Echart").myChartgtbhqs = echarts.init(gtbhqsChart);
                    gtbhqsOption = {
                        legend: {
                            show: false
                        },
                        color: ['#e3a102'],
                        grid: {
                            left: '1%',   // grid 组件离容器左侧的距离。
                            right: '1%',
                            bottom: '2%',
                            height: "88%",
                            containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    show: false,
                                }

                            },
                        },
                        xAxis: {
                            show: true,
                            type: 'category',
                            data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
                            boundaryGap: ["5%", "5%"],
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "rgba(80,172,254,0.2)"
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    fontSize: 22,
                                    color: "#00d7fe"
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: "rgba(80,172,254,0.2)"
                                }
                            }

                        },
                        yAxis: {
                            name: "        (金额/百万)",
                            nameTextStyle: {
                                color: "#00d7fe",
                                fontSize: 22,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "rgba(80,172,254,0.2)"
                                }
                            },
                            //interval: 10,
                            max: 2000000,
                            axisLabel: {
                                margin: 2,
                                
                        formatter: function (value, index) {
                           
                                value = value / 1000000 ;
                         
                            return value;
                        },
                        textStyle: {
                            fontSize: 22,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)",
                        }
                    }
                },
                series: [
                  {
                      type: 'line',
                      //smooth:true,
                      //color:"rgba(7,196,230,1)",
                      lineStyle: {
                          width: 2,
                      },
                      symbolSize: 10,
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: "rgba(227,161,2,.1)",
                          }, {
                              offset: 1,
                              color: "rgba(227,161,2,.3)",
                          }])
                      },
                      data: gtbhqsdata
                  }
                ]
            };
            require("e_Echart").myChartgtbhqs.setOption(gtbhqsOption);
               
            })
          
        },
        //就业机会
        jyjh: function () {
            if ($("#jyjh-chart").length <= 0) { return false; }
            var jyjhChart = document.getElementById('jyjh-chart');
            e_EchartAjax.jyjhbhqs(function (result) {
                if (require("e_Echart").jyjhbhqsData == null) { return false; }
                var data = require("e_Echart").jyjhbhqsData;
                var arrvalue = [data[0].COUNT, data[1].COUNT, data[2].COUNT, data[3].COUNT, data[4].COUNT,]
                var arryear = [data[0].year, data[1].year, data[2].year, data[3].year, data[4].year,]
                require("e_Echart").myChartjyjh = echarts.init(jyjhChart);
                jyjhOption = {
                    legend: {
                        show: false
                    },
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "94%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                show: false,
                            }
                        },
                    },
                    xAxis: {
                        show: true,
                        type: 'category',
                        data: arryear,
                        boundaryGap: ["5%", "5%"],
                        axisTick: {
                            show: false,
                        },
                        
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        }

                    },
                    yAxis: {
                        axisTick: {
                            show: false,
                        },
                        //max: 90,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 10,
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          smooth: true,
                          color: "rgba(7,196,230,1)",
                          lineStyle: {
                              width: 2,
                          },
                          //symbolSize:10,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(7,196,230,.3)",
                              }, {
                                  offset: 1,
                                  color: "rgba(7,196,230,0)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                require("e_Echart").myChartjyjh.setOption(jyjhOption);
            })
        },
        //薪资水平
        xzsp: function () {
            if ($("#xzsp-chart").length <= 0) { return false; }
            var xzspChart = document.getElementById('xzsp-chart');
            e_EchartAjax.xzspbhqs(function (result) {
                if (require("e_Echart").xzspbhqsData == null) { return false; }
                var data = require("e_Echart").xzspbhqsData;
                var arrvalue = [data[0].COUNT, data[1].COUNT, data[2].COUNT, data[3].COUNT, data[4].COUNT,]
                var arryear = [data[0].year, data[1].year, data[2].year, data[3].year, data[4].year,]
                require("e_Echart").myChartxzsp = echarts.init(xzspChart);
                xzspOption = {
                    legend: {
                        show: false
                    },
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "94%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                show: false,
                            }
                        },
                    },
                    xAxis: {
                        show: true,
                        type: 'category',
                        data: arryear,
                        boundaryGap: ["5%", "5%"],
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        }

                    },
                    yAxis: {
                        axisTick: {
                            show: false,
                        },
                        min:7500,
                        //max: 8500,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        interval: 300,
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          smooth: true,
                          color: "rgba(7,230,75,1)",
                          lineStyle: {
                              width: 2,
                          },
                          //symbolSize:10,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(7,230,75,.3)",
                              }, {
                                  offset: 1,
                                  color: "rgba(7,230,75,0)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                require("e_Echart").myChartxzsp.setOption(xzspOption);
            })
        },
        //高层次人才
        gccrc: function () {
            if ($("#gccrc-chart").length <= 0) { return false; }
            var gccrcChart = document.getElementById('gccrc-chart');
            e_EchartAjax.gccrcbhqs(function (result) {
                if (require("e_Echart").gccrcbhqsData == null) { return false; }
                var data = require("e_Echart").gccrcbhqsData;
                var arrdq = [data[0].dq, data[1].dq, data[2].dq, data[3].dq, data[4].dq,]
                var arrvalue = [data[0].COUNT, data[1].COUNT, data[2].COUNT, data[3].COUNT, data[4].COUNT, ]
                require("e_Echart").myChartgccrc = echarts.init(gccrcChart);
                gccrcOption = {
                    legend: {
                        show: false
                    },
                    color: ['#02d8e3'],
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "94%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                show: false,
                            }
                        },
                    },

                    xAxis: {
                        show: true,
                        type: 'category',
                        data: arrdq,
                        boundaryGap: ["20%", "20%"],
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        }

                    },
                    yAxis: {
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 10,
                        //max: 90,
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'bar',
                          barWidth: 50,
                          itemStyle: {
                              normal: {
                                  barBorderRadius: 8,
                                  // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  //     offset: 0,
                                  //     color: '#04cafc'
                                  // }, {
                                  //     offset: 1,
                                  //     color: '#0e4abc'
                                  // }]),
                              }
                          },
                          color: "#0065fc",
                          data: arrvalue
                      }
                    ]
                };
                require("e_Echart").myChartgccrc.setOption(gccrcOption);
            })
        },
        //风控雷达
        fkld: function () {
            if ($("#fkld-chart").length <= 0) { return false; }
            require("e_Echart").myChartleida = echarts.init(document.getElementById('fkld-chart'));

            var dataArr = [0.01,0.33, 0.11, 0.54 ];

            require("e_Echart").fkldInterval = setInterval(function () {
                gauge_value++;  //递增
                if (gauge_value >= 100) { //重置
                    gauge_value = 0;
                }

                option = {
                    //backgroundColor: 'black',
                    title: {
                        show: false, //关闭显示
                        x: "center",
                        bottom: 200,
                        //text:'AAA',
                        subtext: '信用等级'
                    },
                    tooltip: {
                        show: false,//关闭显示
                        //  formatter: "{a} <br/>{b} {c}",
                        backgroundColor: '#F7F9FB',
                        borderColor: '#92DAFF',
                        borderWidth: '1px',
                        textStyle: {
                            color: 'black'
                        },
                        formatter: function (param) {
                            return '<em style="color:' + param.color + ';">' + param.value + '</em> 分'
                        }

                    },
                    series: [{
                        name: '信用分',
                        type: 'gauge',
                        startAngle: 90,       //开始角度
                        endAngle: -269.9999,  //结束角度
                        animation: 0,          //动画关闭防止从100到0时出现倒回来的动画
                        min: 0,               //图表最小值
                        max: 100,             //最大值

                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 15,
                                shadowBlur: 10,         //发光
                                shadowColor: "#8e26dc",
                                // borderWidth: 10,
                                // shadowOffsetX: 10,
                                // shadowOffsetY: 5,
                                // color: [                
                                //     [0.2, '#a6f08f'],
                                //     [0.4, '#3dd4de'],
                                //     [0.8, '#7CBB55'],
                                //     [1, '#8e26dc'],
                                // ]
                                color: [
                                    [dataArr[0], '#a6f08f'],
                                    [dataArr[0] + dataArr[1], '#3dd4de'],
                                    [dataArr[0] + dataArr[1] + dataArr[2], '#e4e100'],
                                    [dataArr[0] + dataArr[1] + dataArr[2] + dataArr[3], '#8e26dc'],
                                ]
                            }
                        },
                        axisTick: {
                            show: false,
                            splitNumber: 1
                        },
                        splitLine: {
                            show: false,
                            length: 0,
                            lineStyle: {
                                //color:'black'
                            },
                        },
                        axisLabel: {
                            show: false,
                            // formatter: function(e) {
                            //     switch (e + "") {
                            //         case "410":
                            //             return "较差";
                            //             //return "";
                            //         case "470":
                            //             return "550";

                            //         case "530":
                            //             return "中等";
                            //             //return "";
                            //         case "590":
                            //             return "600";

                            //         case "650":
                            //             return "良好";
                            //             //return "";
                            //         case "710":
                            //             return "650";

                            //         case "770":
                            //             return "优秀";
                            //             //return "";
                            //         case "830":
                            //             return "700";

                            //         case "890":
                            //             return "极好";
                            //             //return "";
                            //         default:
                            //             return e;
                            //     }
                            // },
                            textStyle: {
                                fontSize: 12,
                                fontWeight: ""
                            }
                        },
                        pointer: {       //指针
                            show: true,
                            length: '120%',//指针长度
                            width: 1,
                        },
                        itemStyle: { //仪表盘指针样式

                            normal: {
                                //   color: '#55e1eb',
                                // areaColor: '#006fff',
                                // shadowOffsetX: 2,
                                // shadowOffsetY: 2
                                shadowColor: '#55e1eb',
                                shadowBlur: 10,
                                borderWidth: 3,//设置外层边框
                                borderColor: '#55e1eb',
                            },
                            emphasis: {
                                areaColor: '#55e1eb'
                            }
                        },
                        detail: {

                            //  formatter: '{value}%', //显示的值

                            //show:true,
                            formatter: function (param) {
                                var level = '';
                                if (param <= dataArr[0] * 100) { //舆情风险
                                    level = dataArr[0] * 100 + '%'
                                    var html = '';
                                    html+= '<div class="fkld-div">';
                                    html+= ' <div class="fkld-result">舆情风险</div>';
                                    html+= '<div class="fkld-button flex">';
                                    html+= '<button class="">企业数<span>297</span></button>';
                                         html+= '<button class="">信息数<span>1,238</span></button>';
                                         html+= '</div>'
                                         html+= '<ul class="fkld-list">';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">其他风险<span>21|84</span></div>';
                                         html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         html+= '</li>';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">服务质量<span>101|432</span></div>';
                                         html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         html+= '</li>';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">产品品质<span>117|558</span></div>';
                                             html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         html+= '</li>';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">企业高管<span>32|82</span></div>';
                                             html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                             html+= '</li>';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">公司品牌<span>26|82</span></div>';
                                             html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                             html+= '</li>';
                                         //html+= '<li class="fkld-li">';
                                         //html+= '<div class="fkld-title">车船使用税<span>6,234|5,123</span></div>';
                                         //    html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         //html+= '</li>';
                                         //html+= '<li class="fkld-li">';
                                         //html+= '<div class="fkld-title">印花税<span>3,055|6,136</span></div>';
                                         //html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         //html+= '</li>';
                                         //html+= '<li class="fkld-li">';
                                         //html+= '<div class="fkld-title">城建税<span>8,091|5,785</span></div>';
                                         //    html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         //    html+= '</li>';
                                         //    html+= '<li class="fkld-li">';
                                         //    html+= '<div class="fkld-title">营改税<span>7,791|5,091</span></div>';
                                         //    html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         //    html+= '</li>';
                                          html+= '</ul>';
                                          html += '</div>';
                                 $('#fkld').html(html);
                                }
                                else if (param <= (dataArr[0] + dataArr[1]) * 100) { //税收异常
                                    level = dataArr[1] * 100 + '%'
                                    var html = '';
                                    html += '<div class="fkld-div">';
                                    html += ' <div class="fkld-result">税收异常</div>';
                                    html += '<div class="fkld-button flex">';
                                    html += '<button class="">企业数<span>30,452</span></button>';
                                    html += '<button class="">信息数<span>41,158</span></button>';
                                    html += '</div>'
                                    html += '<ul class="fkld-list">';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">企业所得税<span>5,433|10,938</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">增值税异常<span>10,239|20,608</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">营业税异常<span>1,418|2,862</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">消费税<span>7|14</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">房产税<span>300|600</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    //html += '<li class="fkld-li">';
                                    //html += '<div class="fkld-title">车船使用税<span>6,234|5,123</span></div>';
                                    //html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    //html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">印花税<span>3,055|6,136</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    //html += '<li class="fkld-li">';
                                    //html += '<div class="fkld-title">城建税<span>8,091|5,785</span></div>';
                                    //html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    //html += '</li>';
                                    //html += '<li class="fkld-li">';
                                    //html += '<div class="fkld-title">营改税<span>7,791|5,091</span></div>';
                                    //html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    //html += '</li>';
                                    html += '</ul>';
                                    html += '</div>';
                                    $('#fkld').html(html);
                                }
                                else if (param <= (dataArr[0] + dataArr[1] + dataArr[2]) * 100) { //司法监管
                                    level = dataArr[2] * 100 + '%'
                                    var html = '';
                                    html += '<div class="fkld-div">';
                                    html += ' <div class="fkld-result">司法监管</div>';
                                    html += '<div class="fkld-button flex">';
                                    html += '<button class="">企业数<span>6,990</span></button>';
                                    html += '<button class="">信息数<span>32,244</span></button>';
                                    html += '</div>'
                                    html += '<ul class="fkld-list">';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">海关处罚<span>13|28</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">开庭公告<span>1,518|10,844</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">法院公告<span>172|768</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">查封冻结<span>33|42</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">裁判文书<span>1,296|7,181</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">案件流程<span>722|2,673</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">执行信息<span>2,526|8,709</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    html += '</li>';
                                    html += '<li class="fkld-li">';
                                    html += '<div class="fkld-title">失信信息<span>710|1,999</span></div>';
                                    html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    //html += '</li>';
                                    //html += '<li class="fkld-li">';
                                    //html += '<div class="fkld-title">营改税<span>7,791|5,091</span></div>';
                                    //html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                    //html += '</li>';
                                    html += '</ul>';
                                    html += '</div>';
                                    $('#fkld').html(html);
                                }
                                else if (param <= (dataArr[0] + dataArr[1] + dataArr[2] + dataArr[3]) * 100) { //经营风险
                                    level = dataArr[3] * 100 + '%'
                                      var html = '';
                                    html+= '<div class="fkld-div">';
                                    html+= ' <div class="fkld-result">经营风险</div>';
                                    html+= '<div class="fkld-button flex">';
                                    html+= '<button class="">企业数<span>33,906</span></button>';
                                         html+= '<button class="">信息数<span>160,399</span></button>';
                                         html+= '</div>'
                                         html+= '<ul class="fkld-list">';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">股权冻结<span>13|23</span></div>';
                                         html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         html+= '</li>';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">经营异常<span>6,950|10,157</span></div>';
                                         html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         html+= '</li>';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">工商变更<span>24,204|141,015</span></div>';
                                             html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         html+= '</li>';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">涉税处罚<span>12|25</span></div>';
                                             html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                             html+= '</li>';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">纳税非正常户<span>199|261</span></div>';
                                             html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                             html+= '</li>';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">欠税公告<span>2,390|8,549</span></div>';
                                             html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         html+= '</li>';
                                         html+= '<li class="fkld-li">';
                                         html+= '<div class="fkld-title">股权质押<span>138|369</span></div>';
                                         html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         html+= '</li>';
                                         //html+= '<li class="fkld-li">';
                                         //html+= '<div class="fkld-title">城建税<span>8,091|5,785</span></div>';
                                         //    html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         //    html+= '</li>';
                                         //    html+= '<li class="fkld-li">';
                                         //    html+= '<div class="fkld-title">营改税<span>7,791|5,091</span></div>';
                                         //    html+= '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
                                         //    html+= '</li>';
                                             html+= '</ul>';
                                             html += '</div>';
                                 $('#fkld').html(html);
                                } else {
                                    level = '暂无';
                                }
                                return level;
                            },
                            offsetCenter: [0, 0],
                            textStyle: {
                                fontSize: 40,
                                color:'#fff', 
                                
                            }
                        },
                        data: [{
                            name: "",
                            value: Math.floor(gauge_value)
                        }]
                    }]
                };

                require("e_Echart").myChartleida.setOption(option, true);

            }, 300);
        },
        
        fkldFun: function () {
            
        //        var data = require("t_Echart").yqsjlblxData;
        //        for (var i = 1; i < data.data.length; i++) {
        //            html += '<li class="yqsj-item">';
        //            html += '<div class="yqsj-itemdiv"><span>00' + i + '</span>' + data.data[i].name + '（<em class="testAerial">2</em>）</div>';
        //            html += '<ol class="yqsj-itemol">';
        //            html += '<li class="">' + data.data[i].label + '</li>';
        //            html += '<li class="">' + data.data[i].content + '</li>';
        //            html += '</ol>';
        //            html += '</li>';
        //        }
            //        $('#sj').html(html);
          
        },


        Revert: function () {
            //产业竞争力
            if (require("e_Echart").myChartcyjzl != null && require("e_Echart").myChartcyjzl != "" && require("e_Echart").myChartcyjzl != undefined) {
                require("e_Echart").myChartcyjzl.dispose();
                //require("e_Echart").myChartcyjzl.restore();
            }
            //企业变化趋势
            if (require("e_Echart").myChartqybhqs != null && require("e_Echart").myChartqybhqs != "" && require("e_Echart").myChartqybhqs != undefined) {
                require("e_Echart").myChartqybhqs.dispose();
                //require("e_Echart").myChartqybhqs.restore();
            }
            //税收变化趋势
            if (require("e_Echart").myChartssbhqs != null && require("e_Echart").myChartssbhqs != "" && require("e_Echart").myChartssbhqs != undefined) {
                require("e_Echart").myChartssbhqs.dispose();
                //require("e_Echart").myChartssbhqs.restore();
            }
            //固投变化趋势
            if (require("e_Echart").myChartgtbhqs != null && require("e_Echart").myChartgtbhqs != "" && require("e_Echart").myChartgtbhqs != undefined) {
                require("e_Echart").myChartgtbhqs.dispose();
                //require("e_Echart").myChartgtbhqs.restore();
            }
            //就业机会
            if (require("e_Echart").myChartjyjh != null && require("e_Echart").myChartjyjh != "" && require("e_Echart").myChartjyjh != undefined) {
                require("e_Echart").myChartjyjh.dispose();
                //require("e_Echart").myChartjyjh.restore();
            }
            //薪资水平
            if (require("e_Echart").myChartxzsp != null && require("e_Echart").myChartxzsp != "" && require("e_Echart").myChartxzsp != undefined) {
                require("e_Echart").myChartxzsp.dispose();
                //require("e_Echart").myChartxzsp.restore();
            }
            //高层次人才
            if (require("e_Echart").myChartgccrc != null && require("e_Echart").myChartgccrc != "" && require("e_Echart").myChartgccrc != undefined) {
                require("e_Echart").myChartgccrc.dispose();
                //require("e_Echart").myChartgccrc.restore();
            }
            //风控雷达
            if (require("e_Echart").myChartleida != null && require("e_Echart").myChartleida != "" && require("e_Echart").myChartleida != undefined) {
                clearInterval(require("e_Echart").fkldInterval);//清空计时器
                require("e_Echart").myChartleida.dispose();
                

                //require("e_Echart").myChartleida.restore();
            }
           
        },
       
    
    }
})