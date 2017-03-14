$(function() {
	document.oncontextmenu=function(e){
			return false
	}
	var global_var = {}
	var property = {
		width: $(".content").width(),
		height: $(".content").height(),
		leftOffset: 0,
		topOffset: 0
	};
	var demo = $.initER($("#demo"), property);
	var data = {"title":"数据表设计","nodes":{"demo_node_5":{"name":"","left":16,"top":0,"type":"fork","width":208,"height":200,"alt":true,"locked":false,"data":{"id":5,"name":"GY_ITEM_INFO","nameCn":"车辆表","type":"mysql","field":[{"fieldName":"id","fieldNameCn":"标识","id":1,"length":10,"type":"INT","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":true,"defaultValue":"123"},{"fieldName":"p_id","fieldNameCn":"父级标识","id":2,"length":10,"type":"INT","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":false},{"fieldName":"type","fieldNameCn":"类型","id":3,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":false},{"fieldName":"name_cn","fieldNameCn":"中文名","id":4,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":false},{"fieldName":"name","fieldNameCn":"英文名","id":5,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":false},{"fieldName":"protocol_type","fieldNameCn":"协议类型","id":6,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":false},{"fieldName":"level","fieldNameCn":"等级","id":7,"length":10,"type":"INT","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":false},{"fieldName":"frequency","fieldNameCn":"频率","id":11,"length":10,"type":"INT","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":false},{"fieldName":"unit","fieldNameCn":"单位","id":12,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":false},{"fieldName":"des","fieldNameCn":"标记","id":13,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":false},{"fieldName":"flag","fieldNameCn":"标记信息","id":14,"length":2,"type":"TINYINT","tableId":198,"createDate":"2017-03-03 15:54:22","pkStatus":false}]}},"demo_node_61":{"name":"node_61","left":772,"top":280,"type":"mutiselect","width":200,"height":200,"alt":true,"locked":true,"data":{"id":61,"name":"GY_SIGNAL_INFO","nameCn":"车辆信号表","type":"mysql","field":[{"fieldName":"id","fieldNameCn":"标识","id":1,"length":10,"type":"INT","tableId":198,"createDate":"2017-03-03 15:54:22"},{"fieldName":"p_id","fieldNameCn":"父级标识","id":2,"length":10,"type":"INT","tableId":198,"createDate":"2017-03-03 15:54:22"},{"fieldName":"type","fieldNameCn":"类型","id":3,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22"},{"fieldName":"name_cn","fieldNameCn":"中文名","id":4,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22"},{"fieldName":"name","fieldNameCn":"英文名","id":5,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22"},{"fieldName":"protocol_type","fieldNameCn":"协议类型","id":6,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22"},{"fieldName":"level","fieldNameCn":"等级","id":7,"length":10,"type":"INT","tableId":198,"createDate":"2017-03-03 15:54:22"},{"fieldName":"frequency","fieldNameCn":"频率","id":11,"length":10,"type":"INT","tableId":198,"createDate":"2017-03-03 15:54:22"},{"fieldName":"unit","fieldNameCn":"单位","id":12,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22"},{"fieldName":"des","fieldNameCn":"标记","id":13,"length":10,"type":"VARCHAR","tableId":198,"createDate":"2017-03-03 15:54:22"},{"fieldName":"flag","fieldNameCn":"标记信息","id":14,"length":2,"type":"TINYINT","tableId":198,"createDate":"2017-03-03 15:54:22"}]}},"demo_node_63":{"name":"node_63","left":176,"top":454,"type":"fork","locked":false,"data":{"id":63,"name":"test","nameCn":"测试","type":"ES","field":[{"fieldName":"id","fieldNameCn":"升水","type":"STRING","pkStatus":false,"length":"1","nullStatus":"","defaultValue":"","tableId":""}]},"width":200,"height":200,"alt":true},"demo_node_66":{"name":"node_66","left":480,"top":12,"type":"fork","locked":false,"data":{"id":66,"name":"user","nameCn":"测试","type":"mysql","field":[{"fieldName":"id","length":10,"nullStatus":false,"pkStatus":false,"type":"INT","fieldNameCn":"标识"},{"fieldName":"user","length":20,"nullStatus":false,"pkStatus":false,"type":"VARCHAR","fieldNameCn":"标识是是"},{"fieldName":"age","length":20,"nullStatus":false,"pkStatus":false,"type":"VARCHAR","fieldNameCn":"标识是是是"},{"fieldName":"name","length":20,"nullStatus":false,"pkStatus":false,"type":"VARCHAR","fieldNameCn":"标识是"},{"fieldName":"unit","length":20,"nullStatus":false,"pkStatus":false,"type":"VARCHAR","fieldNameCn":"是是"}]},"width":200,"height":200,"alt":true}},"lines":{"demo_line_62":{"type":"sl","from":"demo_node_5","to":"demo_node_61","name":"","relevance":{"from":"level","to":"level"},"alt":true},"demo_line_64":{"type":"sl","from":"demo_node_5","to":"demo_node_63","name":"","relevance":{},"alt":true},"demo_line_65":{"type":"sl","from":"demo_node_63","to":"demo_node_61","name":"","relevance":{"from":"id","to":"id"},"alt":true},"demo_line_67":{"type":"sl","from":"demo_node_5","to":"demo_node_66","name":"","relevance":{},"alt":true},"demo_line_68":{"type":"sl","from":"demo_node_66","to":"demo_node_61","name":"","relevance":{},"alt":true}},"initNum":69,"created":false}
	demo.loadData(data)
	//--------------------新建--------------------//
	//获得新建页面
	demo.onCreateTable = function() {
		$("#create").modal()
		$("#create select[name='type']").val('请选择类型')
		$("#create input[name='nameEn']").val('')
		$("#create input[name='nameCn']").val('')
	}
	demo.onCreateclick = function() {
		$("#create").modal()
		$("#create select[name='type']").val('请选择类型')
		$("#create input[name='nameEn']").val('')
		$("#create input[name='nameCn']").val('')
	}
	$("#create button[type='button']").on("click",function(){
		var This = demo
		var json = {
			"id": This.$max,
			"name": $("#create input[name='nameEn']").val(),
			"nameCn": $("#create input[name='nameEn']").val(),
			"type": $("#create select[name='type']").val(),
			"field": []
		}
		This.addNode(This.$id + "_node_" + This.$max, { name: "node_" + This.$max, left: 0, top: 0, type: "fork", locked: false, data: json });
		$("#create").modal("hide")
	})
	
	//--------------------导入--------------------//	
		//获得导入页面
		demo.onImportTable = function() {
			$("#import").modal()
		}
		demo.onImportclick = function() {
			$("#import").modal()
		}
		//右键菜单绑定
		demo.onDeleteclick = function(id){
			demo.delNode(id);
		}
		demo.onClearclick = function(id){
			demo.clearNodeData(id);
		}
	//双击连接线设置关联
		demo.onLineDbclick = function(from,to,lineId,relevance){
			$("#relevance").attr("lineId",lineId)
			
			$(".from .tableHead").html(from.data.name)
			$(".to .tableHead").html(to.data.name)
			
			var txt = ""
			for(var i=0;i<from.data.field.length;i++){
				txt += "<li><input type='radio' name='from' data='" + from.data.field[i].fieldName + "'/>" + from.data.field[i].fieldName + "(" + from.data.field[i].fieldNameCn + "):<span>" + from.data.field[i].type + "</span></li>"
			}
			$(".from .tableBody ul").empty()
			$(".from .tableBody ul").append(txt)
			
			var txt = ""
			for(var i=0;i<to.data.field.length;i++){
				txt += "<li><input type='radio' name='to' data='" + to.data.field[i].fieldName + "'/>" + to.data.field[i].fieldName + "(" + to.data.field[i].fieldNameCn + "):<span>" + to.data.field[i].type + "</span></li>"
			}
			$(".to .tableBody ul").empty()
			$(".to .tableBody ul").append(txt)
			
			$("input[name='from']").each(function(){
				if($(this).attr("data")==relevance.from){
					$(this).prop("checked",true)
				}
			})
			$("input[name='to']").each(function(){
				if($(this).attr("data")==relevance.to){
					$(this).prop("checked",true)
				}
			})
			$("#relevance").modal()
		}
		
		//保存关联
		$("#relevance button.confirm").on("click",function(){
			var data = {
					from : $("input[name='from']:checked").attr("data"),
					to : $("input[name='to']:checked").attr("data")
				}
				demo.setRelevance($("#relevance").attr("lineId"),data)
				$("#relevance").modal('hide');
		})
		
		//--------------------编辑字段集合--------------------//
		demo.onEditclick = function(data,id) {
			$("#property").attr("fieldNodeId",id)
			$("#property").attr("dataBaseType",data.data.type)
			$("#property input[name='tableName']").val(data.data.name)
			$("#property input[name='tableNameCn']").val(data.data.nameCn)
			var txt = ""
			for(var i=0;i<data.data.field.length;i++){
				var index = '<td>' + (i+1) + '</td>'
				var fieldName = '<td><input type="text" class="form-control" name="fieldName" placeholder="英文" value="' + data.data.field[i].fieldName +'" pattern="^[a-zA-Z0-9_]*$" required/></td>'
				var fieldNameCn = '<td><input type="text" class="form-control" name="fieldNameCn" placeholder="中文" value="' + data.data.field[i].fieldNameCn +'" pattern="^[\u4E00-\u9FA5]*$" required></td>'
				var length = '<td><input type="text" class="form-control" name="length" value="' + data.data.field[i].length +'" pattern="^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])$" required/></td>'
				var pkStatus = '<td><input type="radio" class="cbx" id="pkStatus' + i + '" name="pkStatus"' + (data.data.field[i].pkStatus?'checked="checked"':'') + '/><label for="pkStatus' + i + '" class="lbl green"></label></td>'
				var nullStatus = '<td><input type="checkbox" id="nullStatus' + i + '" name="nullStatus"' + (data.data.field[i].nullStatus?'checked="checked"':'') + 'class="cbx"/><label for="nullStatus' + i + '" class="lbl blue"></label></td>'
				var defaultValue = '<td><input type="text" class="form-control" value="' + (data.data.field[i].defaultValue?data.data.field[i].defaultValue:"") +'" name="defaultValue"/></td>'
				var trash = '<td><span class="glyphicon glyphicon-trash"></span></td>'
				var mysql = ["INT","INTEGER","TINYINT","DOUBLE","FLOAT","VARCHAR","TIME","TIMESTAMP"]
				var ES = ["STRING","INTEGER","LONG","FLOAT","DOUBLE","BOLLEAN","DATE"]
				var arr = mysql
				switch (data.data.type){
					case "mysql":
					arr = mysql
						break;
					case "ES":
					arr = ES
						break;
					default:
						break;
				}
				var sl = '<select class="iovoption" name="type">'
				for(var j=0;j<arr.length;j++){
					var opt;
					if(data.data.field[i].type==arr[j]){
						opt = '<option value="' + arr[j] + '" selected="selected">' + arr[j] + '</option>'
					}
					else{
						opt = '<option value="' + arr[j] + '">' + arr[j] + '</option>'
					}
					sl += opt
				}
				sl += '</select>'
				var type = '<td>' + sl + '</td>'
				
				txt += "<tr>" + index + fieldName + fieldNameCn + type + length + pkStatus + nullStatus + defaultValue + trash + "</tr>"
			}
			$("#property .table tbody").empty()
			$("#property .table tbody").append(txt)
			$("#property").modal()
		}
		
		//--------------------增加字段--------------------//
		$("#property .addField").on("click",function(){
			var i = $("#property .table tbody tr").length
			var index = '<td>' + (i+1) + '</td>'
				var fieldName = '<td><input type="text" class="form-control" name="fieldName" placeholder="英文" pattern="^[a-zA-Z0-9_]*$" required/></td>'
				var fieldNameCn = '<td><input type="text" class="form-control" name="fieldNameCn" placeholder="中文" pattern="^[\u4E00-\u9FA5]*$" required></td>'
				var length = '<td><input type="text" class="form-control" name="length" pattern="^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])$" required/></td>'
				var pkStatus = '<td><input type="radio" class="cbx" id="pkStatus' + i + '" name="pkStatus"/><label for="pkStatus' + i + '" class="lbl green"></label></td>'
				var nullStatus = '<td><input type="checkbox" id="nullStatus' + i + '" name="nullStatus" class="cbx"/><label for="nullStatus' + i + '" class="lbl blue"></label></td>'
				var defaultValue = '<td><input type="text" class="form-control" name="defaultValue"/></td>'
				var trash = '<td><span class="glyphicon glyphicon-trash"></span></td>'
				var mysql = ["INT","INTEGER","TINYINT","DOUBLE","FLOAT","VARCHAR","TIME","TIMESTAMP"]
				var ES = ["STRING","INTEGER","LONG","FLOAT","DOUBLE","BOLLEAN","DATE"]
				var arr = mysql
				switch ($("#property").attr("dataBaseType")){
					case "mysql":
					arr = mysql
						break;
					case "ES":
					arr = ES
						break;
					default:
						break;
				}
				var sl = '<select class="iovoption" name="type">'
				for(var j=0;j<arr.length;j++){
					sl += '<option value="' + arr[j] + '">' + arr[j] + '</option>'
				}
			sl += '</select>'
			var type = '<td>' + sl + '</td>'
				
			var txt = "<tr>" + index + fieldName + fieldNameCn + type + length + pkStatus + nullStatus + defaultValue + trash + "</tr>"
			$("#property .table tbody").append(txt)
		})
		//--------------------删除字段--------------------//
		$("#property .table tbody").delegate(".glyphicon-trash","click",function(e){
			$(this).parent("td").parent("tr").remove()
			$("#property .table tbody tr").each(function(){
				$(this).children("td").eq(0).html($(this).index()+1)
			})
		})
		
		//--------------------保存字段--------------------//
		$("#property button.confirm").on("click",function(){
			$('#property').modal('hide');
			var data = {
				"id": $("#property").attr("fieldNodeId"),
                "name": $("#property input[name='tableName']").val(),
                "nameCn": $("#property input[name='tableNameCn']").val(),
                "type": $("#property").attr("dataBaseType"),
                "field": []
			}
			$("#property .table tbody tr").each(function(){
				var temp = {
					"fieldName": $(this).find("input[name='fieldName']").val(),
                    "fieldNameCn": $(this).find("input[name='fieldNameCn']").val(),
                    "length": $(this).find("input[name='length']").val(),
                    "type": $(this).find("select[name='type']").val(),
                    "pkStatus": $(this).find("input[name='pkStatus']").prop("checked"),
                    "nullStatus": $(this).find("input[name='nullStatus']").prop("checked"),
                    "defaultValue": $(this).find("input[name='defaultValue']").val()
				}
				data.field.push(temp)
			})
			demo.setNodeData($("#property").attr("fieldNodeId"),data)
		})
		
		$(".check input").on("click",function(){
			$("#checkData textarea").val(JSON.stringify(demo.exportData(), null, 4))
		})
	
})