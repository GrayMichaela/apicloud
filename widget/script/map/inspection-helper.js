/*
* @Author: lilu
* @Date: 2020-11-05 10:00:51
 * @LastEditors: lilu
 * @LastEditTime: 2020-11-10 18:36:31
* @Description:
*/
(function (window, document) {
  const left = 15
  const right = 55
  const firstTop = 90
  const secondTop = 140
  const width = 40
  const height = 40

  /**
  * 打开巡检模式
  */
  function openInspectionMode () {
    window.api.openFrame({
      name: 'frame_mode',
      url: '../../html/inspection/frm_mode.html',
      bounces: false,
      rect: {
        x: document.body.offsetWidth - right,
        y: secondTop,
        w: width,
        h: height
      }
    })
  }
  /**
*打开天气
*/
  function openWeatherFrame () {
    window.api.openFrame({
      name: 'frame_weather',
      url: '../../html/inspection/frm_weather.html',
      bounces: false,
      rect: {
        x: left,
        y: firstTop,
        w: document.body.offsetWidth * 0.78,
        h: 40
      }
      // bgColor: '#6b666a'
    })
  }

  /**
* 打开定位缩放工具
*/
  function openZoomFrame () {
    window.api.openFrame({
      name: 'frame_map_zoom',
      url: '../../html/inspection/frm_map_zoom.html',
      bounces: false,
      rect: {
        x: left,
        // y: document.body.offsetHeight / 2 + 90,
        w: 40,
        h: 120,
        marginBottom: 86
      }
      // bgColor: '#6b666a'
    })
  }

  /**
* 打开左侧工具
*/
  function openToolbarFrame () {
    window.api.openFrame({
      name: 'frame_map_toolbar',
      url: '../../html/inspection/frm_map_toolbar.html',
      bounces: false,
      rect: {
        x: document.body.offsetWidth - right,
        // y: document.body.offsetHeight / 2,
        w: 40,
        h: 157,
        marginBottom: 86
      },
      bgColor: '#6b666a'
    })
  }

  /**
* 打开搜索
*/
  function openSearchFrame () {
    window.api.openFrame({
      name: 'frame_map_search',
      url: '../../html/inspection/frm_search.html',
      bounces: false,
      rect: {
        x: document.body.offsetWidth - right,
        y: firstTop,
        h: 40
      },
      fixedOn: 'frm_CMap',
      vScrollBarEnabled: false,
      hScrollBarEnabled: false
    })
  }

  /**
* 打开代办任务
*/
  function openAgentTaskFrame () {
    window.api.openFrame({
      name: 'frame_map_agent_task',
      url: '../../html/inspection/frm_agent_task.html',
      bounces: false,
      rect: {
        x: left,
        y: secondTop - 10,
        w: width + 10,
        h: height + 10
      },
      vScrollBarEnabled: false,
      hScrollBarEnabled: false
      // bgColor: '#6b666a'
    })
  }

  /**
   * 资源监管图例
   */
  function openResourceLegend () {
    // alert(window.api.winHeight)
    window.api.openFrame({
      name: 'frame_resource_legend',
      url: '../../html/inspection/frm_legend.html',
      bounces: false,
      rect: {
        x: left,
        y: window.api.winHeight / 2 + 90,
        w: 35,
        h: 35
      },
      vScrollBarEnabled: false,
      hScrollBarEnabled: false
      // bgColor: '#6b666a'
    })
  }

  /**
   *巡林监管下统计信息
   */
  function openStatisticFrame () {
    window.api.openFrame({
      name: 'frame_statistic',
      url: '../../html/inspection/frm_statistic.html',
      bounces: false,
      rect: {
        x: left,
        y: firstTop,
        w: document.body.offsetWidth * 0.8,
        h: 45
      }
      // bgColor: '#6b666a'
    })
  }

  /**
   * 打开开始巡林
   */
  function openStartInspectionFrame () {
    window.api.openFrame({
      name: 'frame_start_inspection',
      url: '../../html/inspection/frm_start_inspection.html',
      bounces: false,
      rect: {
        x: document.body.offsetWidth / 2 - 65,
        // y: firstTop,
        w: 130,
        h: 40,
        marginBottom: 86
      }
      // bgColor: '#6b666a'
    })
  }

  function closeFrame (frameName) {
    window.api.closeFrame({
      name: frameName
    })
  }
  var InspectionHelper = {
    openInspectionMode: openInspectionMode,
    openWeatherFrame: openWeatherFrame,
    openZoomFrame: openZoomFrame,
    openToolbarFrame: openToolbarFrame,
    openSearchFrame: openSearchFrame,
    openAgentTaskFrame: openAgentTaskFrame,
    openResourceLegend: openResourceLegend,
    openStatisticFrame: openStatisticFrame,
    openStartInspectionFrame: openStartInspectionFrame,
    closeFrame: closeFrame
  }
  window.InspectionHelper = InspectionHelper
})(window, document)
