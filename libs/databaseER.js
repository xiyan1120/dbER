
/*本系列框架中,一些用得上的小功能函数,一些UI必须使用到它们,用户也可以单独拿出来用*/

//获取一个DIV的绝对坐标的功能函数,即使是非绝对定位,一样能获取到
function getElCoordinate(dom) {
  var t = dom.offsetTop;
  var l = dom.offsetLeft;
  dom=dom.offsetParent;
  while (dom) {
    t += dom.offsetTop;
    l += dom.offsetLeft;
	dom=dom.offsetParent;
  }; return {
    top: t,
    left: l
  };
}
//兼容各种浏览器的,获取鼠标真实位置
function mousePosition(ev){
	if(!ev) ev=window.event;
    if(ev.pageX || ev.pageY){
        return {x:ev.pageX, y:ev.pageY};
    }
    return {
        x:ev.clientX + document.documentElement.scrollLeft - document.body.clientLeft,
        y:ev.clientY + document.documentElement.scrollTop  - document.body.clientTop
    };
}
//给DATE类添加一个格式化输出字串的方法
Date.prototype.format = function(format)   
{   
   var o = {   
      "M+" : this.getMonth()+1, //month  
      "d+" : this.getDate(),    //day  
      "h+" : this.getHours(),   //hour  
      "m+" : this.getMinutes(), //minute  
      "s+" : this.getSeconds(), //second  ‘
	  //quarter  
      "q+" : Math.floor((this.getMonth()+3)/3), 
      "S" : this.getMilliseconds() //millisecond  
   }   
   if(/(y+)/.test(format)) format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));   
    for(var k in o)if(new RegExp("("+ k +")").test(format))   
      format = format.replace(RegExp.$1,   
        RegExp.$1.length==1 ? o[k] :    
          ("00"+ o[k]).substr((""+ o[k]).length));   
    return format;   
}

var JSON;JSON||(JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

//定义一个区域图类：
function databaseER(bgDiv,property){
	if (navigator.userAgent.indexOf("MSIE 8.0")>0||navigator.userAgent.indexOf("MSIE 7.0")>0||navigator.userAgent.indexOf("MSIE 6.0")>0)
		databaseER.prototype.useSVG="";
	else	databaseER.prototype.useSVG="1";
//初始化区域图的对象
	this.$id=bgDiv.attr("id");
	this.$bgDiv=bgDiv;//最父框架的DIV
	this.$bgDiv.addClass("databaseER");
	if(databaseER.prototype.color.font){
    this.$bgDiv.css("color",databaseER.prototype.color.font);
	}
	var width=(property.width||800)-2;
	var height=(property.height||500)-2;
	this.$bgDiv.css({width:width+"px",height:height+"px"});
	this.$tool=null;//左侧工具栏对象
	this.$title="newFlow_1";//流程图的名称
	this.$nodeRemark={};//每一种结点或按钮的说明文字,JSON格式,key为类名,value为用户自定义文字说明
	this.$nowType="cursor";//当前要绘制的对象类型
	this.$lineData={};
	this.$lineCount=0;
	this.$nodeData={};
	this.$nodeCount=0;
	this.$lineDom={};
	this.$nodeDom={};
	this.$clipboard=null
	this.$editable=true
	
	this.$max=property.initNum||1;//计算默认ID值的起始SEQUENCE
	this.$focus="";//当前被选定的结点/转换线ID,如果没选中或者工作区被清空,则为""
	this.$cursor="default";//鼠标指针在工作区内的样式
	this.$deletedItem={};//在流程图的编辑操作中被删除掉的元素ID集合,元素ID为KEY,元素类型(node,line.area)为VALUE
	var tmp="";
	this.leftOffset = property.leftOffset
	this.topOffset = property.topOffset
		this.$bgDiv.append("<div class='databaseER_tool'><ul class='databaseER_tool_div'></ul></div>");
		this.$tool=this.$bgDiv.find(".databaseER_tool_div");
		//未加代码：加入绘图工具按钮
		this.$tool.append(
      "<li><a type='cursor' class='databaseER_tool_btn databaseER_tool_btndown' id='"+this.$id+"_btn_cursor'><i class='ico_cursor'/><span>移动</span></a></li>"
   	+"<li><a type='direct' class='databaseER_tool_btn' id='"+this.$id+"_btn_direct'><i class='ico_direct'/><span>连线</span></a></li>"
  	+"<li><a type='tool' class='tool databaseER_tool_btn' title='新建表' id='tool_create'><i class='ico_create'/><span>新建</span></a></li>"
  	+"<li><a type='tool' class='tool databaseER_tool_btn' title='导入表' id='tool_import'><i class='ico_import'/><span>导入</span></a></li>"
		);
		this.$nowType="cursor";
	this.$bgDiv.append("<div class='databaseER_work'></div>");
	this.$workArea=$("<div class='databaseER_work_inner' style='width:"+width*3+"px;height:"+height*3+"px'></div>")
		.attr({"unselectable":"on","onselectstart":'return false',"onselect":'document.selection.empty()'});
	this.$bgDiv.children(".databaseER_work").append(this.$workArea);
	this.$draw=null;//画矢量线条的容器
	this.initDraw("draw_"+this.$id,width,height);
	
	this.$bgDiv.append('<div class="item_menu"></div>')
	this.$menuContext = this.$bgDiv.find(".item_menu");
		
		
		 //为了结点而增加的一些集体delegate绑定
	  this.initWorkForNode();
	  //对结点进行移动或者RESIZE时用来显示的遮罩层
	  this.$ghost=$("<div class='rs_ghost'></div>").attr({"unselectable":"on","onselectstart":'return false',"onselect":'document.selection.empty()'});
	  this.$bgDiv.append(this.$ghost);
	  this.$lineMove=$("<div class='databaseER_line_move' style='display:none'></div>");//操作折线时的移动框
	  this.$workArea.append(this.$lineMove);
	  this.$lineMove.on("mousedown",{inthis:this},function(e){
		  if(e.button==2)return false;
		  var lm=$(this);
		  lm.css({"background-color":databaseER.prototype.color.font||"#333"});
		  var This=e.data.inthis;
		  var ev=mousePosition(e),t=getElCoordinate(This.$workArea[0]);
		  var X,Y;
		  X=ev.x-t.left+This.$workArea[0].parentNode.scrollLeft;
		  Y=ev.y-t.top+This.$workArea[0].parentNode.scrollTop;
		  var p=This.$lineMove.position();
		  var vX=X-p.left,vY=Y-p.top;
		  var isMove=false;
		  document.onmousemove=function(e){
			if(!e)e=window.event;
			var ev=mousePosition(e);
			var ps=This.$lineMove.position();
			X=ev.x-t.left+This.$workArea[0].parentNode.scrollLeft;
		 	Y=ev.y-t.top+This.$workArea[0].parentNode.scrollTop;
			if(This.$lineMove.data("type")=="lr"){
			  X=X-vX;
			  if(X<0)	X=0;
			  else if(X>This.$workArea.width())
				X=This.$workArea.width();
			  This.$lineMove.css({left:X+"px"});
			}
			else if(This.$lineMove.data("type")=="tb"){
			  Y=Y-vY;
			  if(Y<0)	Y=0;
			  else if(Y>This.$workArea.height())
				Y=This.$workArea.height();
			  This.$lineMove.css({top:Y+"px"});
		    }
			isMove=true;
		  }
		  document.onmouseup=function(e){
			if(isMove){
				var p=This.$lineMove.position();
				if(This.$lineMove.data("type")=="lr")
					This.setLineM(This.$lineMove.data("tid"),p.left+3);
				else if(This.$lineMove.data("type")=="tb")
					This.setLineM(This.$lineMove.data("tid"),p.top+3);
			}
			This.$lineMove.css({"background-color":"transparent"});
			if(This.$focus==This.$lineMove.data("tid")){
				This.focusItem(This.$lineMove.data("tid"));
			}
			document.onmousemove=null;
			document.onmouseup=null;
		  }
	  });
	  //选定一条转换线后出现的浮动操作栏，有改变线的样式和删除线等按钮。
	  this.$lineOper=$("<div class='databaseER_line_oper' style='display:none'><i class='b_l1'></i><i class='b_l2'></i><i class='b_l3'></i><i class='b_x'></i></div>");//选定线时显示的操作框
	  this.$workArea.parent().append(this.$lineOper);
	  this.$lineOper.on("click",{inthis:this},function(e){
	 	if(!e)e=window.event;
		if(e.target.tagName!="I")	return;
		var This=e.data.inthis;
		var id=$(this).data("tid");
		switch($(e.target).attr("class")){
			case "b_x":	
			This.delLine(id);
			this.style.display="none";break;
			case "b_l1":
			This.setLineType(id,"lr");break;
			case "b_l2":
			This.setLineType(id,"tb");break;
			case "b_l3":
			This.setLineType(id,"sl");break;
		}
	  });
	  //新增移动线两个端点至新的结点功能移动功能，这里要提供移动用的DOM
		this.$mpFrom=$("<div class='databaseER_line_mp' style='display:none'></div>");
		this.$mpTo=$("<div class='databaseER_line_mp' style='display:none'></div>");
		this.$workArea.append(this.$mpFrom).append(this.$mpTo);
		this.initLinePointsChg();
	  
	  //下面绑定当结点/线/分组块的一些操作事件,这些事件可直接通过this访问对象本身
	  //当操作某个单元（结点/线/分组块）被添加时，触发的方法，返回FALSE可阻止添加事件的发生
	  //格式function(id，type,json)：id是单元的唯一标识ID,type是单元的种类,有"node","line","area"三种取值,json即addNode,addLine或addArea方法的第二个传参json.
	  this.onItemAdd=null;
	  //当操作某个单元（结点/线/分组块）被删除时，触发的方法，返回FALSE可阻止删除事件的发生
	  //格式function(id，type)：id是单元的唯一标识ID,type是单元的种类,有"node","line","area"三种取值
	  this.onItemDel=null;
	  //当操作某个单元（结点/分组块）被移动时，触发的方法，返回FALSE可阻止移动事件的发生
	  //格式function(id，type,left,top)：id是单元的唯一标识ID,type是单元的种类,有"node","area"两种取值，线line不支持移动,left是新的左边距坐标，top是新的顶边距坐标
	  this.onItemMove=null;
	  //当操作某个单元（结点/线/分组块）被重命名时，触发的方法，返回FALSE可阻止重命名事件的发生
	  //格式function(id,name,type)：id是单元的唯一标识ID,type是单元的种类,有"node","line","area"三种取值,name是新的名称
	  this.onItemRename=null;
	  //当操作某个单元（结点/线）被由不选中变成选中时，触发的方法，返回FALSE可阻止选中事件的发生
	  //格式function(id,type)：id是单元的唯一标识ID,type是单元的种类,有"node","line"两种取值,"area"不支持被选中
	  this.onItemFocus=null;
	  //当操作某个单元（结点/线）被由选中变成不选中时，触发的方法，返回FALSE可阻止取消选中事件的发生
	  //格式function(id，type)：id是单元的唯一标识ID,type是单元的种类,有"node","line"两种取值,"area"不支持被取消选中
	  this.onItemBlur=null;
	  //当操作某个单元（结点/分组块）被重定义大小或造型时，触发的方法，返回FALSE可阻止重定大小/造型事件的发生
	  //格式function(id，type,width,height)：id是单元的唯一标识ID,type是单元的种类,有"node","line","area"三种取值;width是新的宽度,height是新的高度
	  this.onItemResize=null;
	  //当移动某条折线中段的位置，触发的方法，返回FALSE可阻止重定大小/造型事件的发生
	  //格式function(id，M)：id是单元的唯一标识ID,M是中段的新X(或Y)的坐标
	  this.onLineMove=null;
	  //当变换某条连接线的类型，触发的方法，返回FALSE可阻止重定大小/造型事件的发生
	  //格式function(id，type)：id是单元的唯一标识ID,type是连接线的新类型,"sl":直线,"lr":中段可左右移动的折线,"tb":中段可上下移动的折线
	  this.onLineSetType=null;
	  //当变换某条连接线的端点变更连接的结点时，触发的方法，返回FALSE可阻止重定大小/造型事件的发生
	  //格式function(id，newStart,newEnd)：id是连线单元的唯一标识ID,newStart,newEnd分别是起始结点的ID和到达结点的ID
	  this.onLinePointMove=null;
	  //当用重色标注某个结点/转换线时触发的方法，返回FALSE可阻止重定大小/造型事件的发生
	  //格式function(id，type，mark)：id是单元的唯一标识ID,type是单元类型（"node"结点,"line"转换线），mark为布尔值,表示是要标注TRUE还是取消标注FALSE
	  this.onItemMark=null;
	  
		//将外部的方法加入到databaseER对象的事务操作堆栈中,在过后的undo/redo操作中可以进行控制，一般用于对流程图以外的附加信息进行编辑的事务撤销/重做控制；
		//传参func为要执行方法对象,jsonPara为外部方法仅有的一个面向字面的JSON传参,由JSON对象带入所有要传的信息；
		//提示:为了让外部方法能够被UNDO/REDO,需要在编写这些外部方法实现时,加入对该方法执行后效果回退的另一个执行方法的pushExternalOper
		
		this.onLineDbclick=null;
		this.onEditclick=null;
		this.onCreateclick=null;
		this.onImportclick=null;
		this.onClearclick=null;
		this.nRefreshclick=null;
		this.onDeleteclick=null;
		
		this.onCreateTable=null;
		this.onImportTable=null;
}
databaseER.prototype={
	useSVG:"",
	getSvgMarker:function(id,color){
		var m=document.createElementNS("http://www.w3.org/2000/svg","marker");
		m.setAttribute("id",id);
		m.setAttribute("viewBox","0 0 6 6");
		m.setAttribute("refX",5);
		m.setAttribute("refY",3);
		m.setAttribute("markerUnits","strokeWidth");
		m.setAttribute("markerWidth",6);
		m.setAttribute("markerHeight",6);
		m.setAttribute("orient","auto");
		var path=document.createElementNS("http://www.w3.org/2000/svg","path");
		path.setAttribute("d","M 0 0 L 6 3 L 0 6 z");
		path.setAttribute("fill",color);
		path.setAttribute("stroke-width",0);
		m.appendChild(path);
		return m;
	},
	initDraw:function(id,width,height){
		var elem;
		if(databaseER.prototype.useSVG!=""){
			this.$draw=document.createElementNS("http://www.w3.org/2000/svg","svg");//可创建带有指定命名空间的元素节点
			this.$workArea.prepend(this.$draw);
			var defs=document.createElementNS("http://www.w3.org/2000/svg","defs");
			this.$draw.appendChild(defs);
			defs.appendChild(databaseER.prototype.getSvgMarker("arrow1",databaseER.prototype.color.line||"#3892D3"));
			defs.appendChild(databaseER.prototype.getSvgMarker("arrow2",databaseER.prototype.color.mark||"#ff3300"));
			defs.appendChild(databaseER.prototype.getSvgMarker("arrow3",databaseER.prototype.color.mark||"#ff3300"));
		}
		else{
			this.$draw = document.createElement("v:group");
			this.$draw.coordsize = width*3+","+height*3;
			this.$workArea.prepend("<div class='databaseER_work_vml' style='position:relative;width:"+width*3+"px;height:"+height*3+"px'></div>");
			this.$workArea.children("div")[0].insertBefore(this.$draw,null);
		}
		this.$draw.id = id;
		this.$draw.style.width = width*3 + "px";
		this.$draw.style.height = +height*3 + "px";
		//绑定连线的点击选中以及双击编辑事件
		var tmpClk=null;
		if(databaseER.prototype.useSVG!="")  tmpClk="g";
		else  tmpClk="PolyLine";
		
		$(this.$draw).delegate(tmpClk,"click",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(!This.$editable) return;
			This.focusItem(this.id,true);
		});
		$(this.$draw).delegate(tmpClk,"dblclick",{inthis:this},function(e){
				if(!e)e=window.event;
				var This = e.data.inthis
				if(!This.$editable) return;
				from = This.$lineData[this.id].from,
				to = This.$lineData[this.id].to,
				relevance = This.$lineData[this.id].relevance,
				fromNode = This.$nodeData[from],
				toNode = This.$nodeData[to]
				if(This.onLineDbclick){
					This.onLineDbclick(fromNode,toNode,this.id,relevance)
				}
		});
		
	
	},
	setRelevance:function(id,data){
		this.$lineData[id].relevance = data
	},
	lockNode:function(id,bool){
		this.$nodeData[id].locked = bool
	},
	setNodeData:function(id,data){
		this.$nodeData[id].data = data
		var json = this.$nodeData[id],
		txt = "<nav><ul>",
		moreShow
		var field = json.data.field
		json.height - (field.length*18+70) < 0 ? moreShow = "block" : moreShow = "none"	
		var field = json.data.field
			for(var i=0;i<field.length;i++){
				txt += "<li>" + field[i].fieldName + "(" + field[i].fieldNameCn + ") :<span>" + field[i].type + "</span></li>"
			}
			txt += "</ul></nav>"
		var temp = "<nav class='item_head'><span class='glyphicon glyphicon-lock'></span><span class='en'>" + json.data.name + "</span><span class='cn'>" + json.data.nameCn +
		"</span></nav><nav class='item_body' style='width:"+(json.width-2)+"px;height:"+(json.height-2)+"px;'>"+txt+"</nav><nav class='item_more' style='display:" + moreShow + "'><span>更多</span></nav><div style='display:none'><div class='rs_bottom'></div><div class='rs_right'></div><div class='rs_rb'></div></div>";
		$("#"+id).empty()
		$("#"+id).append(temp)
	},
	//初始化用来改变连线的连接端点的两个小方块的操作事件
	initLinePointsChg:function(){
		this.$mpFrom.on("mousedown",{inthis:this},function(e){
			var This=e.data.inthis;
			This.switchToolBtn("cursor");
			var ps=This.$mpFrom.data("p").split(",");
			var pe=This.$mpTo.data("p").split(",");
			$(this).hide();
			This.$workArea.data("lineEnd",{"x":pe[0],"y":pe[1],"id":This.$lineData[This.$lineOper.data("tid")].to}).css("cursor","crosshair");
			var line=databaseER.prototype.drawLine("databaseER_tmp_line",[ps[0],ps[1]],[pe[0],pe[1]],true,true);
			This.$draw.appendChild(line);
			return false;
	  });
		this.$mpTo.on("mousedown",{inthis:this},function(e){
			var This=e.data.inthis;
			This.switchToolBtn("cursor");
			var ps=This.$mpFrom.data("p").split(",");
			var pe=This.$mpTo.data("p").split(",");
			$(this).hide();
			This.$workArea.data("lineStart",{"x":ps[0],"y":ps[1],"id":This.$lineData[This.$lineOper.data("tid")].from}).css("cursor","crosshair");
			var line=databaseER.prototype.drawLine("databaseER_tmp_line",[ps[0],ps[1]],[pe[0],pe[1]],true,true);
			This.$draw.appendChild(line);
			return false;
	  });
	},

	//切换左边工具栏按钮,传参TYPE表示切换成哪种类型的按钮
	switchToolBtn:function(type){
		this.$nowType=type;
		$(".databaseER_tool_btn").removeClass("databaseER_tool_btndown");
		this.$tool.find("#"+this.$id+"_btn_"+type).addClass("databaseER_tool_btndown");
		if(this.$nowType=="direct"){
     	this.blurItem();
		}
	},
	//增加一个流程结点,传参为一个JSON,有id,name,top,left,width,height,type(结点类型)等属性
	addNode:function(id,json){
		if(this.onItemAdd!=null&&!this.onItemAdd(id,"node",json))return;
		var mark=json.marked? " item_mark":"";
		var moreShow,lock
			if(!json.width||json.width<150)json.width=200;
			if(!json.height||json.height<200)json.height=200;
			if(!json.top||json.top<0)json.top=0;
			if(!json.left||json.left<0)json.left=0;
			if(!json.data.field)json.data.field=[]
			if(!json.locked)json.locked=false
			lock=json.locked?"lock":""
			var txt = "<nav><ul>"
			var field = json.data.field
			for(var i=0;i<field.length;i++){
				txt += "<li>" + field[i].fieldName + "(" + field[i].fieldNameCn + ") :<span>" + field[i].type + "</span></li>"
			}
			txt += "</ul></nav>"
			json.height - (field.length*18+70) < 0 ? moreShow = "block" : moreShow = "none"
			this.$nodeDom[id]=$("<div class='databaseER_item"+mark+ " " +lock+"' id='"+id+"' style='top:"+json.top+"px;left:"+json.left+"px'><nav class='item_head'><span class='glyphicon glyphicon-lock'></span><span class='en'>" + json.data.name + "</span><span class='cn'>" + json.data.nameCn + "</span></nav><nav class='item_body' style='width:"+(json.width-2)+"px;height:"+(json.height-2)+"px;'>"+txt+"</nav><nav class='item_more' style='display:" + moreShow + "'><span>更多</span></nav><div style='display:none'><div class='rs_bottom'></div><div class='rs_right'></div><div class='rs_rb'></div></div></div>");
		this.$workArea.append(this.$nodeDom[id]);
		this.$nodeData[id]=json;
		++this.$nodeCount;
			this.$nodeData[id].alt=true;
		this.$max++;
	},
	initWorkForNode:function(){
		//右键菜单
		this.$workArea.delegate("#draw_"+this.$id,"mouseup",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(!This.$editable) return;
			if(e.button==2){
				var pasteTxt=""
				pasteTxt=This.$clipboard?'<li class="rs_paste">粘贴</li>':'<li class="rs_paste forbidden">粘贴</li>'
				var menuDom = $(".item_menu"),
						txt = '<ul><li class="rs_create">新建表</li>'+
						'<li class="rs_import">导入表</li>'+
						'<span></span>'+
						pasteTxt+
						'<span></span>'+
						'<li class="rs_refresh">刷新</li></ul>'
				menuDom.empty()
				menuDom.append(txt)
				
				if(menuDom.css("display")=="block") menuDom.css({"display":"none"})
				menuDom.css({
					"display":"none",
					"left":e.clientX+"px",
					"top":e.clientY+"px"
				})
				menuDom.slideDown("fast");
				$(window).one("mousedown",function(e){
							var classArr = []
							$(".item_menu li").each(function(){
								classArr.push($(this)[0].className)
							})
							if($.inArray(e.target.className,classArr)==-1){
								menuDom.css({"display":"none"})
						}
				})
			}
		});
				
		//绑定点击事件
		this.$workArea.delegate(".databaseER_item","click",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			This.focusItem(this.id,true);
			$(this).removeClass("item_mark");
		});
		this.$workArea.delegate(".databaseER_item","dblclick",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(!This.$editable) return;
			var id = This.$focus
			var data = This.$nodeData[id]
			if(This.onEditclick&&!data.locked){
				This.onEditclick(data,id)
			}
		})
		//绑定用鼠标移动事件
		this.$workArea.delegate(".databaseER_item","mousedown",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(e.button==0){
				if(This.$nowType=="direct")	return;
				var Dom=$(this);
				var id=Dom.attr("id");
				This.focusItem(id,true);
				var hack=1;
				if(navigator.userAgent.indexOf("8.0")!=-1)	hack=0;
				var ev=mousePosition(e),t=getElCoordinate(This.$workArea[0]);
				
				Dom.children().clone().prependTo(This.$ghost);
				var X,Y;
				X=ev.x-t.left+This.$workArea[0].parentNode.scrollLeft;
				Y=ev.y-t.top+This.$workArea[0].parentNode.scrollTop;
				var vX=X-This.$nodeData[id].left,vY=Y-This.$nodeData[id].top;
				var isMove=false;
				document.onmousemove=function(e){
					if(!e)e=window.event;
					var ev=mousePosition(e);
					if(X==ev.x-vX&&Y==ev.y-vY)	return false;
					X=ev.x-vX;Y=ev.y-vY;
					
					if(isMove&&This.$ghost.css("display")=="none"){
						This.$ghost.css({display:"block",
							width:This.$nodeData[id].width-2+"px", height:This.$nodeData[id].height-2+"px",
							top:This.$nodeData[id].top+t.top-This.$workArea[0].parentNode.scrollTop+hack+"px",
							left:This.$nodeData[id].left+t.left-This.$workArea[0].parentNode.scrollLeft+hack+"px",cursor:"move"
						});
					}
	
					if(X<t.left-This.$workArea[0].parentNode.scrollLeft)
						X=t.left-This.$workArea[0].parentNode.scrollLeft;
					else if(X+This.$workArea[0].parentNode.scrollLeft+This.$nodeData[id].width>t.left+This.$workArea.width())
						X=t.left+This.$workArea.width()-This.$workArea[0].parentNode.scrollLeft-This.$nodeData[id].width;
					if(Y<t.top-This.$workArea[0].parentNode.scrollTop)
						Y=t.top-This.$workArea[0].parentNode.scrollTop;
					else if(Y+This.$workArea[0].parentNode.scrollTop+This.$nodeData[id].height>t.top+This.$workArea.height())
						Y=t.top+This.$workArea.height()-This.$workArea[0].parentNode.scrollTop-This.$nodeData[id].height;
					This.$ghost.css({left:X-This.leftOffset+hack+"px",top:Y-This.topOffset+hack+"px"});
					isMove=true;
				}
				document.onmouseup=function(e){
					if(isMove)This.moveNode(id,X+This.$workArea[0].parentNode.scrollLeft-t.left,Y+This.$workArea[0].parentNode.scrollTop-t.top);
					This.$ghost.empty().hide();
					document.onmousemove=null;
					document.onmouseup=null;
				}
			}
		
		});
		//表右键菜单
		this.$workArea.delegate(".databaseER_item","mouseup",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(!This.$editable) return;
			if(e.button==2){
				var Dom=$(this),
				id=Dom.attr("id"),
				menuDom = $(".item_menu"),
				lock = This.$nodeData[id].locked,
				txt = ""
				if(lock){
					txt = '<ul><li class="rs_unlock">解除锁定</li></ul>'
				}
				else{
					txt = '<ul><li class="rs_edit">设计表</li>'+
					'<li class="rs_create">新建表</li>'+
					'<li class="rs_import">导入表</li>'+
					'<li class="rs_delete">删除表</li>'+
					'<li class="rs_clear">清空表</li>'+
					'<li class="rs_lock">锁定表</li>'+
					'<span></span>'+
					'<li class="rs_copy">复制</li>'+
					'<span></span>'+
					'<li class="rs_refresh">刷新</li>'+
					'<li class="rs_info">对象信息</li></ul>'
				}
				menuDom.empty()
				menuDom.append(txt)
				This.focusItem(id,true);
				menuDom.css({
					"display":"none",
					"left":e.clientX+"px",
					"top":e.clientY+"px"
				})
				menuDom.slideDown("fast");
				$(window).one("mousedown",function(e){
					var classArr = []
					$(".item_menu li").each(function(){
						classArr.push($(this)[0].className)
					})
					if($.inArray(e.target.className,classArr)==-1){
						menuDom.css({"display":"none"})
					}
				})
			}	
		});
		//绑定连线时确定初始点
		this.$workArea.delegate(".databaseER_item","mousedown",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(!This.$editable) return;
			if(e.button==2)return false;
			var This=e.data.inthis;
			if(This.$nowType!="direct")	return;
			var ev=mousePosition(e),t=getElCoordinate(This.$workArea[0]);
			var X,Y;
			X=ev.x-t.left+This.$workArea[0].parentNode.scrollLeft;
			Y=ev.y-t.top+This.$workArea[0].parentNode.scrollTop;
			This.$workArea.data("lineStart",{"x":X,"y":Y,"id":this.id}).css("cursor","crosshair");
			var line=databaseER.prototype.drawLine("databaseER_tmp_line",[X,Y],[X,Y],true,true);
			This.$draw.appendChild(line);
		});
		//绑定连线时确定结束点
		this.$workArea.delegate(".databaseER_item","mouseup",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(!This.$editable) return;
			if(This.$nowType!="direct"&&!This.$mpTo.data("p"))	return;
			var lineStart=This.$workArea.data("lineStart");
			var lineEnd=This.$workArea.data("lineEnd");
			if(lineStart&&!This.$mpTo.data("p")){
				This.addLine(This.$id+"_line_"+This.$max,{from:lineStart.id,to:this.id,name:"",relevance:{}});
			}
			else{
				if(lineStart){
					This.moveLinePoints(This.$focus,lineStart.id,this.id);
				}else if(lineEnd){
					This.moveLinePoints(This.$focus,this.id,lineEnd.id);
				}
				if(!This.$nodeData[this.id].marked){
          $(this).removeClass("item_mark");
          if(this.id!=This.$focus){
            $(this).css("border-color",databaseER.prototype.color.node);
          }
          else{
            $(this).css("border-color",databaseER.prototype.color.line);
          }
				}
			}
		});
		this.$workArea.delegate(".item_more span","click",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			var id = e.data.inthis.$focus;
			var dom = $(this).parent(".item_more").siblings(".item_body")
			var tempHeight = dom.children("nav").children("ul").height() - dom.children("nav").height() + This.$nodeData[id].height
			var tempWidth = This.$nodeData[id].width-2
			This.resizeNode(id,tempWidth,tempHeight)
			return false;
		});
		this.$workArea.delegate(".item_head","click",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			var id = e.data.inthis.$focus;
			var tempWidth = This.$nodeData[id].width-2
			This.resizeNode(id,tempWidth,55)
			return false;
		});
		//绑定结点的RESIZE功能
		this.$workArea.delegate(".databaseER_item > div > div[class!=rs_close]","mousedown",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(e.button==2)return false;
			var cursor=$(this).css("cursor");
			if(cursor=="pointer"){return;}
			var id=This.$focus;
			This.switchToolBtn("cursor");
			e.cancelBubble = true;
			e.stopPropagation();
			var hack=1;
			if(navigator.userAgent.indexOf("8.0")!=-1)	hack=0;
			var ev=mousePosition(e),t=getElCoordinate(This.$workArea[0]);
			This.$ghost.css({display:"block",
				width:This.$nodeData[id].width-2+"px", height:This.$nodeData[id].height-2+"px",
				top:This.$nodeData[id].top+t.top-This.$workArea[0].parentNode.scrollTop+hack-This.topOffset+"px",
				left:This.$nodeData[id].left+t.left-This.$workArea[0].parentNode.scrollLeft+hack-This.leftOffset+"px",cursor:cursor
			});
			var X,Y;
			X=ev.x-t.left+This.$workArea[0].parentNode.scrollLeft;
			Y=ev.y-t.top+This.$workArea[0].parentNode.scrollTop;
			var vX=(This.$nodeData[id].left+This.$nodeData[id].width)-X;
			var vY=(This.$nodeData[id].top+This.$nodeData[id].height)-Y;
			var isMove=false;
			This.$ghost.css("cursor",cursor);
			document.onmousemove=function(e){
				if(!e)e=window.event;
				var ev=mousePosition(e);
				X=ev.x-t.left+This.$workArea[0].parentNode.scrollLeft-This.$nodeData[id].left+vX;
				Y=ev.y-t.top+This.$workArea[0].parentNode.scrollTop-This.$nodeData[id].top+vY;
				if(X<100)	X=100;
				if(Y<24)	Y=24;
				isMove=true;
				switch(cursor){
					case "nw-resize":This.$ghost.css({width:X-2+"px",height:Y-2+"px"});break;
					case "w-resize":This.$ghost.css({width:X-2+"px"});break;
					case "n-resize":This.$ghost.css({height:Y-2+"px"});break;
				}
			}
			document.onmouseup=function(e){
				This.$ghost.hide();
				if(!isMove)return;
				if(!e)e=window.event;
				var tempheight = This.$ghost.outerHeight()
				tempheight<55?tempheight=55:tempheight=tempheight
				This.resizeNode(id,This.$ghost.outerWidth(),tempheight);
				document.onmousemove=null;
				document.onmouseup=null;
	  		}
		});
		this.$menuContext.delegate("li","click",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(!This.$editable) return;
			var className = e.target.className
			var id = This.$focus
			var data = This.$nodeData[id]
			if(className.match("forbidden")) return false
			$(".item_menu").css({"display":"none"})
			switch (className){
				case "rs_edit":
					if(This.onEditclick){
						This.onEditclick(data,id)
					}
					break;
				case "rs_create":
					if(This.onCreateclick){
						This.onCreateclick()
					}
					break;
				case "rs_import":
					if(This.onImportclick){
						This.onImportclick()
					}
					break;
				case "rs_delete":
					if(This.onDeleteclick){
						This.onDeleteclick(This.$focus)
					}
					break;
				case "rs_clear":
					if(This.onClearclick){
						This.onClearclick(id)
					}
					break;
				case "rs_copy":
					This.$clipboard = This.$nodeData[id]
					console.log(This.$nodeData[id])
					break;
				case "rs_paste":
					var data = {
						id:This.$max,
						name:This.$clipboard.data.name + " COPY",
						nameCn:This.$clipboard.data.nameCn + " 复件",
						type:This.$clipboard.data.type,
						field:This.$clipboard.data.field
					}
					This.addNode(This.$id+"_node_"+This.$max,{name:"node_"+This.$max,left:0,top:0,type:This.$nowType,locked:false,data:data});
					break;
				case "rs_refresh":
					if(This.onRefreshclick){
						This.onRefreshclick()
					}
					break;
				case "rs_lock":
						$("#"+id).addClass("lock")
						This.lockNode(id,true)
					break;
				case "rs_unlock":
						$("#"+id).removeClass("lock")
						This.lockNode(id,false)
					break;
				case "rs_info":
//					if(This.onClearclick){
//						This.onClearclick(id)
//					}
					break;
				default:
					break;
			}
	});
	
	  this.$workArea.on("click",{inthis:this},function(e){
		if(!e)e=window.event;
		var This = e.data.inthis
		var type=This.$nowType;
		if(type=="cursor"){
			var t=$(e.target);
			var n=t.prop("tagName");
			//alert(n);
			if(n=="svg"||(n=="DIV"&&t.prop("class").indexOf("databaseER_work")>-1)||n=="LABEL"){
        if(This.$lineOper.data("tid")){
          This.focusItem(This.$lineOper.data("tid"),false);
          //This.$mpFrom.removeData("p");
        }
        else{This.blurItem();}
			}
			return;
		}
		else if(type=="direct")return;
		var X,Y;
		var ev=mousePosition(e),t=getElCoordinate(this);
		X=ev.x-t.left+this.parentNode.scrollLeft-1;
		Y=ev.y-t.top+this.parentNode.scrollTop-1;
		This.addNode(This.$id+"_node_"+This.$max,{name:"node_"+This.$max,left:X,top:Y,type:This.$nowType,locked:false,data:{}});
	  });
	  //划线或改线时用的绑定
	  this.$workArea.mousemove({inthis:this},function(e){
	  	if(!e)e=window.event;
			var This = e.data.inthis
			if(This.$nowType!="direct"&&!This.$mpTo.data("p"))	return;
			var lineStart=$(this).data("lineStart");
			var lineEnd=$(this).data("lineEnd");
			if(!lineStart&&!lineEnd)return;
			var ev=mousePosition(e),t=getElCoordinate(this);
			var X,Y;
			X=ev.x-t.left+this.parentNode.scrollLeft;
			Y=ev.y-t.top+this.parentNode.scrollTop;
			var line=document.getElementById("databaseER_tmp_line");
			if(lineStart){
					if(databaseER.prototype.useSVG!=""){
					line.childNodes[0].setAttribute("d","M "+lineStart.x+" "+lineStart.y+" L "+X+" "+Y);
					line.childNodes[1].setAttribute("d","M "+lineStart.x+" "+lineStart.y+" L "+X+" "+Y);
					if(line.childNodes[1].getAttribute("marker-end")=="url(\"#arrow2\")")
						line.childNodes[1].setAttribute("marker-end","url(#arrow3)");
					else	line.childNodes[1].setAttribute("marker-end","url(#arrow2)");
				}
				else	line.points.value=lineStart.x+","+lineStart.y+" "+X+","+Y;
			}else if(lineEnd){
				if(databaseER.prototype.useSVG!=""){
					line.childNodes[0].setAttribute("d","M "+X+" "+Y+" L "+lineEnd.x+" "+lineEnd.y);
					line.childNodes[1].setAttribute("d","M "+X+" "+Y+" L "+lineEnd.x+" "+lineEnd.y);
					if(line.childNodes[1].getAttribute("marker-end")=="url(\"#arrow2\")")
						line.childNodes[1].setAttribute("marker-end","url(#arrow3)");
					else	line.childNodes[1].setAttribute("marker-end","url(#arrow2)");
				}
				else	line.points.value=X+","+Y+" "+lineEnd.x+","+lineEnd.y;
			}
	  });
	  this.$workArea.mouseup({inthis:this},function(e){
	  	if(!e)e=window.event;
			var This = e.data.inthis
			if(This.$nowType!="direct"&&!This.$mpTo.data("p"))	return;
			var tmp=document.getElementById("databaseER_tmp_line");
			if(tmp){
				$(this).css("cursor","auto").removeData("lineStart").removeData("lineEnd");
        This.$mpTo.hide().removeData("p");
        This.$mpFrom.hide().removeData("p");
        This.$draw.removeChild(tmp);
        This.focusItem(This.$focus,false);
			}else{
        This.$lineOper.removeData("tid");
			}
	  });//绑定各个按钮的点击事件
		this.$tool.delegate("a","click",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(!This.$editable) return;
			var type=$(this).attr("type");
			if(type!='tool') e.data.inthis.switchToolBtn(type);
		});
		this.$tool.delegate(".tool","click",{inthis:this},function(e){
			if(!e)e=window.event;
			var This = e.data.inthis
			if(!This.$editable) return;
			var id = $(this).attr("id")
			switch (id){
				case "tool_create":
					if(This.onCreateTable){
						This.onCreateTable()
					}
					break;
				case "tool_import":
					if(This.onImportTable){
						This.onImportTable()
					}
					break;
				default:
					break;
			}
		});
	 
	},
	//获取结点/连线/分组区域的详细信息
	getItemInfo:function(id,type){
		switch(type){
			case "node":	return this.$nodeData[id]||null;
			case "line":	return this.$lineData[id]||null;
		}
	},
	//取消所有结点/连线被选定的状态
	blurItem:function(){
		if(this.$focus!=""){
			var jq=$("#"+this.$focus);
			if(jq.prop("tagName")=="DIV"){
				if(this.onItemBlur!=null&&!this.onItemBlur(this.$focus,"node"))	return false;
				jq.removeClass("item_focus").children("div:eq(0)").css("display","none");
				if(databaseER.prototype.color.line){
          if(this.$nodeData[this.$focus].marked){
            jq.css("border-color",databaseER.prototype.color.mark||"#ff3300");
          }
          else{
            jq.css("border-color",databaseER.prototype.color.node||"#A1DCEB");
          }
				}
			}
			else{
				if(this.onItemBlur!=null&&!this.onItemBlur(this.$focus,"line"))	return false;
				if(databaseER.prototype.useSVG!=""){
					if(!this.$lineData[this.$focus].marked){
						jq[0].childNodes[1].setAttribute("stroke",databaseER.prototype.color.line||"#3892D3");
						jq[0].childNodes[1].setAttribute("marker-end","url(#arrow1)");
					}
				}
				else{
					if(!this.$lineData[this.$focus].marked)	jq[0].strokeColor=databaseER.prototype.color.line||"#3892D3";
				}
				this.$lineMove.hide().removeData("type").removeData("tid");
			
				this.$lineOper.hide().removeData("tid");
				this.$mpFrom.hide().removeData("p");
				this.$mpTo.hide().removeData("p");
			}
		}
		this.$focus="";
		return true;
	},
	//选定某个结点/转换线 bool:TRUE决定了要触发选中事件，FALSE则不触发选中事件，多用在程序内部调用。
	focusItem:function(id,bool){
		var jq=$("#"+id);
		if(jq.length==0)	return;
		if(!this.blurItem())	return;//先执行"取消选中",如果返回FLASE,则也会阻止选定事件继续进行.
		if(jq.prop("tagName")=="DIV"){
			if(bool&&this.onItemFocus!=null&&!this.onItemFocus(id,"node"))	return;
			jq.addClass("item_focus");
			if(databaseER.prototype.color.line){
        jq.css("border-color",databaseER.prototype.color.line);
			}
			jq.children("div:eq(0)").css("display","block");
			this.$workArea.append(jq);
		}
		else{//如果是连接线
			if(this.onItemFocus!=null&&!this.onItemFocus(id,"line"))	return;
			if(databaseER.prototype.useSVG!=""){
				jq[0].childNodes[1].setAttribute("stroke",databaseER.prototype.color.mark||"#ff3300");
				jq[0].childNodes[1].setAttribute("marker-end","url(#arrow2)");
			}
			else	jq[0].strokeColor=databaseER.prototype.color.mark||"#ff3300";
			var x,y,from,to,n;
			if(databaseER.prototype.useSVG!=""){
				from=jq.attr("from").split(",");
				to=jq.attr("to").split(",");
				n=[from[0],from[1],to[0],to[1]];
			}else{
				n=jq[0].getAttribute("fromTo").split(",");
				from=[n[0],n[1]];
				to=[n[2],n[3]];
			}
			from[0]=parseInt(from[0],10);
			from[1]=parseInt(from[1],10);
			to[0]=parseInt(to[0],10);
			to[1]=parseInt(to[1],10);
			//var t=getElCoordinate(this.$workArea[0]);
			if(this.$lineData[id].type=="lr"){
				from[0]=this.$lineData[id].M;
				to[0]=from[0];
				
				this.$lineMove.css({
					width:"5px",height:(to[1]-from[1])*(to[1]>from[1]? 1:-1)+"px",
					left:from[0]-3+"px",
					top:(to[1]>from[1]? from[1]:to[1])+1+"px",
					cursor:"e-resize",display:"block"
				}).data({"type":"lr","tid":id});
			}
			else if(this.$lineData[id].type=="tb"){
				from[1]=this.$lineData[id].M;
				to[1]=from[1];
				this.$lineMove.css({
					width:(to[0]-from[0])*(to[0]>from[0]? 1:-1)+"px",height:"5px",
					left:(to[0]>from[0]? from[0]:to[0])+1+"px",
					top:from[1]-3+"px",
					cursor:"s-resize",display:"block"
				}).data({"type":"tb","tid":id});
			}
			x=(from[0]+to[0])/2-35;
			y=(from[1]+to[1])/2+6;
			this.$lineOper.css({display:"block",left:x+"px",top:y+"px"}).data("tid",id);

			this.$mpFrom.css({display:"block",left:n[0]-4+"px",top:n[1]-4+"px"}).data("p",n[0]+","+n[1]);
			this.$mpTo.css({display:"block",left:n[2]-4+"px",top:n[3]-4+"px"}).data("p",n[2]+","+n[3]);

			this.$draw.appendChild(jq[0]);
		}
		this.$focus=id;
		this.switchToolBtn("cursor");
	},
	//移动结点到一个新的位置
	moveNode:function(id,left,top){
		if(!this.$nodeData[id])	return;
		if(this.onItemMove!=null&&!this.onItemMove(id,"node",left,top))	return;
		if(left<0)	left=0;
		if(top<0)	top=0;
		$("#"+id).css({left:left+"px",top:top+"px"});
		this.$nodeData[id].left=left;
		this.$nodeData[id].top=top;
		//重画转换线
		this.resetLines(id,this.$nodeData[id]);
		this.$nodeData[id].alt=true;
	},
	//设置结点/连线/分组区域的文字信息
	setName:function(id,name,type){
		var oldName;
		 if(type=="line"){//如果是线
			if(!this.$lineData[id])	return;
			if(this.$lineData[id].name==name)	return;
			if(this.onItemRename!=null&&!this.onItemRename(id,name,"line"))	return;
			oldName=this.$lineData[id].name;
			this.$lineData[id].name=name;
			if(databaseER.prototype.useSVG!=""){
				this.$lineDom[id].childNodes[2].textContent=name;
			}
			else{
				this.$lineDom[id].childNodes[1].innerHTML=name;
				var n=this.$lineDom[id].getAttribute("fromTo").split(",");
				var x;
				if(this.$lineData[id].type!="lr"){
					x=(n[2]-n[0])/2;
				}
				else{
					var Min=n[2]>n[0]? n[0]:n[2];
					if(Min>this.$lineData[id].M) Min=this.$lineData[id].M;
					x=this.$lineData[id].M-Min;
				}
				if(x<0) x=x*-1;
				this.$lineDom[id].childNodes[1].style.left=x-this.$lineDom[id].childNodes[1].offsetWidth/2+4+"px";
			}
			this.$lineData[id].alt=true;
		}
	},
	//设置结点的尺寸,仅支持非开始/结束结点
	resizeNode:function(id,width,height){
		if(!this.$nodeData[id])	return;
		if(this.onItemResize!=null&&!this.onItemResize(id,"node",width,height))	return;
		if(this.$nodeData[id].type=="start"||this.$nodeData[id].type=="end")return;
		var hack=0;
		if(navigator.userAgent.indexOf("8.0")!=-1)	hack=2;
		this.$nodeDom[id].children(".item_body").css({width:width-2+"px",height:height-2+"px"});
		width=this.$nodeDom[id].outerWidth()-hack;
		height=this.$nodeDom[id].outerHeight()-hack;
		this.$nodeDom[id].children(".item_body").css({width:width-2+"px",height:height-2+"px"});
		this.$nodeData[id].width=width;
		this.$nodeData[id].height=height;
		this.$nodeData[id].alt=true;
		//重画转换线
		this.resetLines(id,this.$nodeData[id]);
		var dom = $("#"+id).find(".item_body")
		var domMore = $("#"+id).find(".item_more")
		var tempHeight = dom.children("nav").children("ul").height() - dom.children("nav").height()
		if(tempHeight>0){
			domMore.css({"display":"block"})
		}
		else{
			domMore.css({"display":"none"})
		}
	},
	//删除结点
	delNode:function(id){
		if(!this.$nodeData[id])	return;
		if(this.onItemDel!=null&&!this.onItemDel(id,"node"))	return;
		//先删除可能的连线
		for(var k in this.$lineData){
			if(this.$lineData[k].from==id||this.$lineData[k].to==id){
				//this.$draw.removeChild(this.$lineDom[k]);
				//delete this.$lineData[k];
				//delete this.$lineDom[k];
				this.delLine(k);
			}
		}
		//再删除结点本身
		delete this.$nodeData[id];
		this.$nodeDom[id].remove();
		delete this.$nodeDom[id];
		--this.$nodeCount;
		if(this.$focus==id)	this.$focus="";
			//在回退新增操作时,如果节点ID以this.$id+"_node_"开头,则表示为本次编辑时新加入的节点,这些节点的删除不用加入到$deletedItem中
		if(id.indexOf(this.$id+"_node_")<0)
			this.$deletedItem[id]="node";
	},
	//清空节点数据
	clearNodeData:function(id){
		this.$nodeData[id].data.field = []
		$("#"+id).find(".item_body").empty()
	},
	//设置流程图的名称
	setTitle:function(text){
		this.$title=text;
		if(this.$head)	this.$head.children("label").attr("title",text).text(text);
	},
	//载入一组数据
	loadData:function(data){
		for(var i in data.nodes)
			this.addNode(i,data.nodes[i]);
		for(var j in data.lines)
			this.addLine(j,data.lines[j]);
		this.$deletedItem={};
		if(data.title)	this.setTitle(data.title);
		if(data.initNum)	this.$max=data.initNum;
		if(data.created){
			this.$editable=false;
		}
		else{
			this.$editable=true;
		}
	},
	//用AJAX方式，远程读取一组数据
	//参数para为JSON结构，与JQUERY中$.ajax()方法的传参一样
	loadDataAjax:function(para){
		var This=this;
		$.ajax({
			type:para.type,
			url:para.url,
			dataType:"json",
			data:para.data,
			success: function(msg){
				if(para.dataFilter)	para.dataFilter(msg,"json");
     			This.loadData(msg);
				if(para.success)	para.success(msg);
   			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				if(para.error)	para.error(textStatus,errorThrown);
			}
		})
	},
	exportData:function(){
		var ret={title:this.$title,nodes:this.$nodeData,lines:this.$lineData,initNum:this.$max,created:!this.$editable};
		for(var k1 in ret.nodes){
			if(!ret.nodes[k1].marked){
				delete ret.nodes[k1]["marked"];
			}
		}
		for(var k2 in ret.lines){
			if(!ret.lines[k2].marked){
				delete ret.lines[k2]["marked"];
			}
		}
		return ret;
	},
	//只把本次编辑流程图中作了变更(包括增删改)的元素导出到一个变量中,以方便用户每次编辑载入的流程图后只获取变更过的数据
	exportAlter:function(){
		var ret={nodes:{},lines:{},areas:{}};
		for(var k1 in this.$nodeData){
			if(this.$nodeData[k1].alt){
				ret.nodes[k1]=this.$nodeData[k1];
			}
		}
		for(var k2 in this.$lineData){
			if(this.$lineData[k2].alt){
				ret.lines[k2]=this.$lineData[k2];
			}
		}
		ret.deletedItem=this.$deletedItem;
		return ret;
	},
	//变更元素的ID,一般用于快速保存后,将后台返回新元素的ID更新到页面中;type为元素类型(节点,连线,区块)
	transNewId:function(oldId,newId,type){
		var tmp;
		switch(type){
			case "node":
			if(this.$nodeData[oldId]){
				tmp=this.$nodeData[oldId];
				delete this.$nodeData[oldId];
				this.$nodeData[newId]=tmp;
				tmp=this.$nodeDom[oldId].attr("id",newId);
				delete this.$nodeDom[oldId];
				this.$nodeDom[newId]=tmp;
			}
			break;
			case "line":
			if(this.$lineData[oldId]){
				tmp=this.$lineData[oldId];
				delete this.$lineData[oldId];
				this.$lineData[newId]=tmp;
				tmp=this.$lineDom[oldId].attr("id",newId);
				delete this.$lineDom[oldId];
				this.$lineDom[newId]=tmp;
			}
			break;
		}
	},
	//清空工作区及已载入的数据
	clearData:function(){
		for(var key in this.$nodeData){
			this.delNode(key);
		}
		for(var key in this.$lineData){
			this.delLine(key);
		}
		this.$deletedItem={};
	},
	//销毁自己
	destrory:function(){
		this.$bgDiv.empty();
		this.$lineData=null;
		this.$nodeData=null;
		this.$lineDom=null;
		this.$nodeDom=null;
		this.$nodeCount=0;
		this.$deletedItem={};
	},
///////////以下为有关画线的方法
	//绘制一条箭头线，并返回线的DOM
	drawLine:function(id,sp,ep,mark,dash){
		var line;
		if(databaseER.prototype.useSVG!=""){
			line=document.createElementNS("http://www.w3.org/2000/svg","g");
			var hi=document.createElementNS("http://www.w3.org/2000/svg","path");
			var path=document.createElementNS("http://www.w3.org/2000/svg","path");

			if(id!="")	line.setAttribute("id",id);
			line.setAttribute("from",sp[0]+","+sp[1]);
			line.setAttribute("to",ep[0]+","+ep[1]);
			hi.setAttribute("visibility","hidden");
			hi.setAttribute("stroke-width",9);
			hi.setAttribute("fill","none");
			hi.setAttribute("stroke","white");
			hi.setAttribute("d","M "+sp[0]+" "+sp[1]+" L "+ep[0]+" "+ep[1]);
			hi.setAttribute("pointer-events","stroke");
			path.setAttribute("d","M "+sp[0]+" "+sp[1]+" L "+ep[0]+" "+ep[1]);
			path.setAttribute("stroke-width",1.4);
			path.setAttribute("stroke-linecap","round");
			path.setAttribute("fill","none");
			if(dash)	path.setAttribute("style", "stroke-dasharray:6,5");
			if(mark){
				path.setAttribute("stroke",databaseER.prototype.color.mark||"#ff3300");
				path.setAttribute("marker-end","url(#arrow2)");
			}
			else{
				path.setAttribute("stroke",databaseER.prototype.color.line||"#3892D3");
				path.setAttribute("marker-end","url(#arrow1)");
			}
			line.appendChild(hi);
			line.appendChild(path);
			line.style.cursor="crosshair";
			if(id!=""&&id!="databaseER_tmp_line"){
				var text=document.createElementNS("http://www.w3.org/2000/svg","text");
				text.setAttribute("fill",databaseER.prototype.color.font||"#333");
				line.appendChild(text);
				var x=(ep[0]+sp[0])/2;
				var y=(ep[1]+sp[1])/2;
				text.setAttribute("text-anchor","middle");
				text.setAttribute("x",x);
				text.setAttribute("y",y);
				line.style.cursor="pointer";
				text.style.cursor="text";
			}
		}else{
			line=document.createElement("v:polyline");
			if(id!="")	line.id=id;
			//line.style.position="absolute";
			line.points.value=sp[0]+","+sp[1]+" "+ep[0]+","+ep[1];
			line.setAttribute("fromTo",sp[0]+","+sp[1]+","+ep[0]+","+ep[1]);
			line.strokeWeight="1.2";
			line.stroke.EndArrow="Block";
			line.style.cursor="crosshair";
			if(id!=""&&id!="databaseER_tmp_line"){
				var text=document.createElement("div");
				//text.innerHTML=id;
				line.appendChild(text);
				var x=(ep[0]-sp[0])/2;
				var y=(ep[1]-sp[1])/2;
				if(x<0) x=x*-1;
				if(y<0) y=y*-1;
				text.style.left=x+"px";
				text.style.top=y-6+"px";
				line.style.cursor="pointer";
			}
			if(dash)	line.stroke.dashstyle="Dash";
			if(mark)	line.strokeColor=databaseER.prototype.color.mark||"#ff3300";
			else	line.strokeColor=databaseER.prototype.color.line||"#3892D3";
			line.fillColor=databaseER.prototype.color.line||"#3892D3";
		}
		return line;
	},
	//画一条只有两个中点的折线
	drawPoly:function(id,sp,m1,m2,ep,mark){
		var poly,strPath;
		if(databaseER.prototype.useSVG!=""){
			poly=document.createElementNS("http://www.w3.org/2000/svg","g");
			var hi=document.createElementNS("http://www.w3.org/2000/svg","path");
			var path=document.createElementNS("http://www.w3.org/2000/svg","path");
			if(id!="")	poly.setAttribute("id",id);
			poly.setAttribute("from",sp[0]+","+sp[1]);
			poly.setAttribute("to",ep[0]+","+ep[1]);
			hi.setAttribute("visibility","hidden");
			hi.setAttribute("stroke-width",9);
			hi.setAttribute("fill","none");
			hi.setAttribute("stroke","white");
			strPath="M "+sp[0]+" "+sp[1];
			if(m1[0]!=sp[0]||m1[1]!=sp[1])
				strPath+=" L "+m1[0]+" "+m1[1];
			if(m2[0]!=ep[0]||m2[1]!=ep[1])
				strPath+=" L "+m2[0]+" "+m2[1];
			strPath+=" L "+ep[0]+" "+ep[1];
			hi.setAttribute("d",strPath);
			hi.setAttribute("pointer-events","stroke");
			path.setAttribute("d",strPath);
			path.setAttribute("stroke-width",1.4);
			path.setAttribute("stroke-linecap","round");
			path.setAttribute("fill","none");
			if(mark){
				path.setAttribute("stroke",databaseER.prototype.color.mark||"#ff3300");
				path.setAttribute("marker-end","url(#arrow2)");
			}
			else{
				path.setAttribute("stroke",databaseER.prototype.color.line||"#3892D3");
				path.setAttribute("marker-end","url(#arrow1)");
			}
			poly.appendChild(hi);
			poly.appendChild(path);
			var text=document.createElementNS("http://www.w3.org/2000/svg","text");
			text.setAttribute("fill",databaseER.prototype.color.font||"#333");
			poly.appendChild(text);
			var x=(m2[0]+m1[0])/2;
			var y=(m2[1]+m1[1])/2;
			text.setAttribute("text-anchor","middle");
			text.setAttribute("x",x);
			text.setAttribute("y",y);
			text.style.cursor="text";
			poly.style.cursor="pointer";
		}
		else{
			poly=document.createElement("v:Polyline");
			if(id!="")	poly.id=id;
			poly.filled="false";
			strPath=sp[0]+","+sp[1];
			if(m1[0]!=sp[0]||m1[1]!=sp[1])
				strPath+=" "+m1[0]+","+m1[1];
			if(m2[0]!=ep[0]||m2[1]!=ep[1])
				strPath+=" "+m2[0]+","+m2[1];
			strPath+=" "+ep[0]+","+ep[1];
			poly.points.value=strPath;
			poly.setAttribute("fromTo",sp[0]+","+sp[1]+","+ep[0]+","+ep[1]);
			poly.strokeWeight="1.2";
			poly.stroke.EndArrow="Block";
			var text=document.createElement("div");
			//text.innerHTML=id;
			poly.appendChild(text);
			var x=(m2[0]-m1[0])/2;
			var y=(m2[1]-m1[1])/2;
			if(x<0) x=x*-1;
			if(y<0) y=y*-1;
			text.style.left=x+"px";
			text.style.top=y-4+"px";
			poly.style.cursor="pointer";
			if(mark)	poly.strokeColor=databaseER.prototype.color.mark||"#ff3300";
			else	poly.strokeColor=databaseER.prototype.color.line||"#3892D3";
		}
		return poly;
	},
	//计算两个结点间要连直线的话，连线的开始坐标和结束坐标
	calcStartEnd:function(n1,n2){
		var X_1,Y_1,X_2,Y_2;
		//X判断：
		var x11=n1.left,x12=n1.left+n1.width,x21=n2.left,x22=n2.left+n2.width;
		//结点2在结点1左边
		if(x11>=x22){
			X_1=x11;X_2=x22;
		}
		//结点2在结点1右边
		else if(x12<=x21){
			X_1=x12;X_2=x21;
		}
		//结点2在结点1水平部分重合
		else if(x11<=x21&&x12>=x21&&x12<=x22){
			X_1=(x12+x21)/2;X_2=X_1;
		}
		else if(x11>=x21&&x12<=x22){
			X_1=(x11+x12)/2;X_2=X_1;
		}
		else if(x21>=x11&&x22<=x12){
			X_1=(x21+x22)/2;X_2=X_1;
		}
		else if(x11<=x22&&x12>=x22){
			X_1=(x11+x22)/2;X_2=X_1;
		}
		
		//Y判断：
		var y11=n1.top,y12=n1.top+n1.height,y21=n2.top,y22=n2.top+n2.height;
		//结点2在结点1上边
		if(y11>=y22){
			Y_1=y11;Y_2=y22;
		}
		//结点2在结点1下边
		else if(y12<=y21){
			Y_1=y12;Y_2=y21;
		}
		//结点2在结点1垂直部分重合
		else if(y11<=y21&&y12>=y21&&y12<=y22){
			Y_1=(y12+y21)/2;Y_2=Y_1;
		}
		else if(y11>=y21&&y12<=y22){
			Y_1=(y11+y12)/2;Y_2=Y_1;
		}
		else if(y21>=y11&&y22<=y12){
			Y_1=(y21+y22)/2;Y_2=Y_1;
		}
		else if(y11<=y22&&y12>=y22){
			Y_1=(y11+y22)/2;Y_2=Y_1;
		}
		return {"start":[X_1,Y_1],"end":[X_2,Y_2]};
	},
	//计算两个结点间要连折线的话，连线的所有坐标
	calcPolyPoints:function(n1,n2,type,M){
		//开始/结束两个结点的中心
		var SP={x:n1.left+n1.width/2,y:n1.top+n1.height/2};
		var EP={x:n2.left+n2.width/2,y:n2.top+n2.height/2};
		var sp=[],m1=[],m2=[],ep=[];
		//如果是允许中段可左右移动的折线,则参数M为可移动中段线的X坐标
		//粗略计算起始点
		sp=[SP.x,SP.y];
		ep=[EP.x,EP.y];
		if(type=="lr"){
			//粗略计算2个中点
			m1=[M,SP.y];
			m2=[M,EP.y];
			//再具体分析修改开始点和中点1
			if(m1[0]>n1.left&&m1[0]<n1.left+n1.width){
				m1[1]=(SP.y>EP.y? n1.top:n1.top+n1.height);
				sp[0]=m1[0];sp[1]=m1[1];
			}
			else{
				sp[0]=(m1[0]<n1.left? n1.left:n1.left+n1.width)
			}
			//再具体分析中点2和结束点
			if(m2[0]>n2.left&&m2[0]<n2.left+n2.width){
				m2[1]=(SP.y>EP.y? n2.top+n2.height:n2.top);
				ep[0]=m2[0];ep[1]=m2[1];
			}
			else{
				ep[0]=(m2[0]<n2.left? n2.left:n2.left+n2.width)
			}
		}
		//如果是允许中段可上下移动的折线,则参数M为可移动中段线的Y坐标
		else if(type=="tb"){
			//粗略计算2个中点
			m1=[SP.x,M];
			m2=[EP.x,M];
			//再具体分析修改开始点和中点1
			if(m1[1]>n1.top&&m1[1]<n1.top+n1.height){
				m1[0]=(SP.x>EP.x? n1.left:n1.left+n1.width);
				sp[0]=m1[0];sp[1]=m1[1];
			}
			else{
				sp[1]=(m1[1]<n1.top? n1.top:n1.top+n1.height)
			}
			//再具体分析中点2和结束点
			if(m2[1]>n2.top&&m2[1]<n2.top+n2.height){
				m2[0]=(SP.x>EP.x? n2.left+n2.width:n2.left);
				ep[0]=m2[0];ep[1]=m2[1];
			}
			else{
				ep[1]=(m2[1]<n2.top? n2.top:n2.top+n2.height);
			}
		}
		return {start:sp,m1:m1,m2:m2,end:ep};
	},
	//初始化折线中段的X/Y坐标,mType='rb'时为X坐标,mType='tb'时为Y坐标
	getMValue:function(n1,n2,mType){
		if(mType=="lr"){
			return (n1.left+n1.width/2+n2.left+n2.width/2)/2;
		}
		else if(mType=="tb"){
			return (n1.top+n1.height/2+n2.top+n2.height/2)/2;
		}
	},
	//原lineData已经设定好的情况下，只在绘图工作区画一条线的页面元素
	addLineDom:function(id,lineData){
		var n1=this.$nodeData[lineData.from],n2=this.$nodeData[lineData.to];//获取开始/结束结点的数据
		if(!n1||!n2)	return;
		//开始计算线端点坐标
		var res;
		if(lineData.type&&lineData.type!="sl")
			res=databaseER.prototype.calcPolyPoints(n1,n2,lineData.type,lineData.M);
		else
			res=databaseER.prototype.calcStartEnd(n1,n2);
		if(!res)	return;
		
		if(lineData.type=="sl")
			this.$lineDom[id]=databaseER.prototype.drawLine(id,res.start,res.end,lineData.marked);
		else
			this.$lineDom[id]=databaseER.prototype.drawPoly(id,res.start,res.m1,res.m2,res.end,lineData.marked);
		this.$draw.appendChild(this.$lineDom[id]);
		if(databaseER.prototype.useSVG==""){
			this.$lineDom[id].childNodes[1].innerHTML=lineData.name;
			if(lineData.type!="sl"){
				var Min=(res.start[0]>res.end[0]? res.end[0]:res.start[0]);
				if(Min>res.m2[0])	Min=res.m2[0];
				if(Min>res.m1[0])	Min=res.m1[0];
				this.$lineDom[id].childNodes[1].style.left = (res.m2[0]+res.m1[0])/2-Min-this.$lineDom[id].childNodes[1].offsetWidth/2+4;
				Min=(res.start[1]>res.end[1]? res.end[1]:res.start[1]);
				if(Min>res.m2[1])	Min=res.m2[1];
				if(Min>res.m1[1])	Min=res.m1[1];
				this.$lineDom[id].childNodes[1].style.top = (res.m2[1]+res.m1[1])/2-Min-this.$lineDom[id].childNodes[1].offsetHeight/2;
			}else
				this.$lineDom[id].childNodes[1].style.left=
				((res.end[0]-res.start[0])*(res.end[0]>res.start[0]? 1:-1)-this.$lineDom[id].childNodes[1].offsetWidth)/2+4;
		}
		else	this.$lineDom[id].childNodes[2].textContent=lineData.name;
	},
	//增加一条线
	addLine:function(id,json){
		if(this.onItemAdd!=null&&!this.onItemAdd(id,"line",json))return;
		if(json.from==json.to)	return;
		var n1=this.$nodeData[json.from],n2=this.$nodeData[json.to];//获取开始/结束结点的数据
		if(!n1||!n2)	return;
		//避免两个节点间不能有一条以上同向接连线
		for(var k in this.$lineData){
			if((json.from==this.$lineData[k].from&&json.to==this.$lineData[k].to))
				return;
		}
		//设置$lineData[id]
		this.$lineData[id]={};
		if(json.type){
			this.$lineData[id].type=json.type;
			if(json.M) this.$lineData[id].M=json.M;
		}
		else	this.$lineData[id].type="sl";//默认为直线
		this.$lineData[id].from=json.from;
		this.$lineData[id].to=json.to;
		this.$lineData[id].name=json.name;
		if(json.marked)	this.$lineData[id].marked=json.marked;
		else	this.$lineData[id].marked=false;
		//设置$lineData[id]完毕
		
		this.$lineData[id].relevance=json.relevance;
		this.addLineDom(id,this.$lineData[id]);
		
		++this.$lineCount;
		this.$lineData[id].alt=true;
		if(this.$deletedItem[id])	delete this.$deletedItem[id];//在回退删除操作时,去掉该元素的删除记录
		
		this.$max++;
	},
	//重构所有连向某个结点的线的显示，传参结构为$nodeData数组的一个单元结构
	resetLines:function(id,node){
		for(var i in this.$lineData){
		  var other=null;//获取结束/开始结点的数据
		  var res;
		  if(this.$lineData[i].from==id){//找结束点
			other=this.$nodeData[this.$lineData[i].to]||null;
			if(other==null)	continue;
			if(this.$lineData[i].type=="sl")
				res=databaseER.prototype.calcStartEnd(node,other);
			else
				res=databaseER.prototype.calcPolyPoints(node,other,this.$lineData[i].type,this.$lineData[i].M)
			if(!res)	break;
		  }
		  else if(this.$lineData[i].to==id){//找开始点
			other=this.$nodeData[this.$lineData[i].from]||null;
			if(other==null)	continue;
			if(this.$lineData[i].type=="sl")
				res=databaseER.prototype.calcStartEnd(other,node);
			else
				res=databaseER.prototype.calcPolyPoints(other,node,this.$lineData[i].type,this.$lineData[i].M);
			if(!res)	break;
		  }
		  if(other==null)	continue;
		  this.$draw.removeChild(this.$lineDom[i]);
		  if(this.$lineData[i].type=="sl"){
		  	this.$lineDom[i]=databaseER.prototype.drawLine(i,res.start,res.end,this.$lineData[i].marked);
		  }
		  else{
			this.$lineDom[i]=databaseER.prototype.drawPoly(i,res.start,res.m1,res.m2,res.end,this.$lineData[i].marked);
		  }
		  this.$draw.appendChild(this.$lineDom[i]);
		  if(databaseER.prototype.useSVG==""){
			this.$lineDom[i].childNodes[1].innerHTML=this.$lineData[i].name;
			if(this.$lineData[i].type!="sl"){
				var Min=(res.start[0]>res.end[0]? res.end[0]:res.start[0]);
				if(Min>res.m2[0])	Min=res.m2[0];
				if(Min>res.m1[0])	Min=res.m1[0];
				this.$lineDom[i].childNodes[1].style.left = (res.m2[0]+res.m1[0])/2-Min-this.$lineDom[i].childNodes[1].offsetWidth/2+4;
				Min=(res.start[1]>res.end[1]? res.end[1]:res.start[1]);
				if(Min>res.m2[1])	Min=res.m2[1];
				if(Min>res.m1[1])	Min=res.m1[1];
				this.$lineDom[i].childNodes[1].style.top = (res.m2[1]+res.m1[1])/2-Min-this.$lineDom[i].childNodes[1].offsetHeight/2-4;
			}else
				this.$lineDom[i].childNodes[1].style.left=
				((res.end[0]-res.start[0])*(res.end[0]>res.start[0]? 1:-1)-this.$lineDom[i].childNodes[1].offsetWidth)/2+4;
		  }
		  else	this.$lineDom[i].childNodes[2].textContent=this.$lineData[i].name;
		}
	},
	//重新设置连线的样式 newType= "sl":直线, "lr":中段可左右移动型折线, "tb":中段可上下移动型折线
	setLineType:function(id,newType,M){
		if(!newType||newType==null||newType==""||newType==this.$lineData[id].type)	return false;
		if(this.onLineSetType!=null&&!this.onLineSetType(id,newType))	return;
		var from=this.$lineData[id].from;
		var to=this.$lineData[id].to;
		this.$lineData[id].type=newType;
		var res;
		//如果是变成折线
		if(newType!="sl"){
		  var res=databaseER.prototype.calcPolyPoints(this.$nodeData[from],this.$nodeData[to],this.$lineData[id].type,this.$lineData[id].M);
		  if(M){
		  	this.setLineM(id,M,true);
		  }else{
		  	this.setLineM(id,this.getMValue(this.$nodeData[from],this.$nodeData[to],newType),true);
		  }
		}
		//如果是变回直线
		else{
		  delete this.$lineData[id].M;
		  this.$lineMove.hide().removeData("type").removeData("tid");
		  res=databaseER.prototype.calcStartEnd(this.$nodeData[from],this.$nodeData[to]);
		  if(!res)	return;
		  this.$draw.removeChild(this.$lineDom[id]);
		  this.$lineDom[id]=databaseER.prototype.drawLine(id,res.start,res.end,this.$lineData[id].marked||this.$focus==id);
		  this.$draw.appendChild(this.$lineDom[id]);
		  if(databaseER.prototype.useSVG==""){
		  	this.$lineDom[id].childNodes[1].innerHTML=this.$lineData[id].name;
			this.$lineDom[id].childNodes[1].style.left=
			((res.end[0]-res.start[0])*(res.end[0]>res.start[0]? 1:-1)-this.$lineDom[id].childNodes[1].offsetWidth)/2+4;
		  }
		  else
			this.$lineDom[id].childNodes[2].textContent=this.$lineData[id].name;
		}
		if(this.$focus==id){
			this.focusItem(id);
		}
		this.$lineData[id].alt=true;
	},
	//设置折线中段的X坐标值（可左右移动时）或Y坐标值（可上下移动时）
	setLineM:function(id,M,noStack){
		if(!this.$lineData[id]||M<0||!this.$lineData[id].type||this.$lineData[id].type=="sl")	return false;
		if(this.onLineMove!=null&&!this.onLineMove(id,M))	return false;
		var from=this.$lineData[id].from;
		var to=this.$lineData[id].to;
		this.$lineData[id].M=M;
		var ps=databaseER.prototype.calcPolyPoints(this.$nodeData[from],this.$nodeData[to],this.$lineData[id].type,this.$lineData[id].M);
		this.$draw.removeChild(this.$lineDom[id]);
		this.$lineDom[id]=databaseER.prototype.drawPoly(id,ps.start,ps.m1,ps.m2,ps.end,this.$lineData[id].marked||this.$focus==id);
		this.$draw.appendChild(this.$lineDom[id]);
		if(databaseER.prototype.useSVG==""){
			this.$lineDom[id].childNodes[1].innerHTML=this.$lineData[id].name;
			var Min=(ps.start[0]>ps.end[0]? ps.end[0]:ps.start[0]);
			if(Min>ps.m2[0])	Min=ps.m2[0];
			if(Min>ps.m1[0])	Min=ps.m1[0];
			this.$lineDom[id].childNodes[1].style.left = (ps.m2[0]+ps.m1[0])/2-Min-this.$lineDom[id].childNodes[1].offsetWidth/2+4;
			Min=(ps.start[1]>ps.end[1]? ps.end[1]:ps.start[1]);
			if(Min>ps.m2[1])	Min=ps.m2[1];
			if(Min>ps.m1[1])	Min=ps.m1[1];
			this.$lineDom[id].childNodes[1].style.top = (ps.m2[1]+ps.m1[1])/2-Min-this.$lineDom[id].childNodes[1].offsetHeight/2-4;
		}
		else	this.$lineDom[id].childNodes[2].textContent=this.$lineData[id].name;
		this.$lineData[id].alt=true;
	},
	//删除转换线
	delLine:function(id){
		if(!this.$lineData[id])	return;
		if(this.onItemDel!=null&&!this.onItemDel(id,"node"))	return;
		this.$draw.removeChild(this.$lineDom[id]);
		delete this.$lineData[id];
		delete this.$lineDom[id];
		if(this.$focus==id)	this.$focus="";
		--this.$lineCount;
			//在回退新增操作时,如果节点ID以this.$id+"_line_"开头,则表示为本次编辑时新加入的节点,这些节点的删除不用加入到$deletedItem中
		if(id.indexOf(this.$id+"_line_")<0)
		this.$deletedItem[id]="line";
		this.$mpFrom.hide().removeData("p");
		this.$mpTo.hide().removeData("p");
		this.$lineOper.hide().removeData("tid");
	},
	//变更连线两个端点所连的结点
	//参数：要变更端点的连线ID，新的开始结点ID、新的结束结点ID；如果开始/结束结点ID是传入null或者""，则表示原端点不变
	moveLinePoints:function(lineId, newStart, newEnd, noStack){
		if(newStart==newEnd)	return;
		if(!lineId||!this.$lineData[lineId])	return;
		if(newStart==null||newStart=="")
			newStart=this.$lineData[lineId].from;
		if(newEnd==null||newEnd=="")
			newEnd=this.$lineData[lineId].to;

		//避免两个节点间不能有一条以上同向接连线
		for(var k in this.$lineData){
			if((newStart==this.$lineData[k].from&&newEnd==this.$lineData[k].to))
				return;
		}
		if(this.onLinePointMove!=null&&!this.onLinePointMove(id,newStart,newEnd))	return;
		if(newStart!=null&&newStart!=""){
			this.$lineData[lineId].from=newStart;
		}
		if(newEnd!=null&&newEnd!=""){
			this.$lineData[lineId].to=newEnd;
		}
		//重建转换线
		this.$draw.removeChild(this.$lineDom[lineId]);
		this.addLineDom(lineId,this.$lineData[lineId]);
		this.$lineData[lineId].alt=true;
	}
	
	}
databaseER.prototype.color={};
//将此类的构造函数加入至JQUERY对象中
jQuery.extend({
	initER:function(bgDiv,property){
		return new databaseER(bgDiv,property);
	}
}); 