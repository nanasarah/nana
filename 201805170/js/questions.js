// JavaScript Document	
$(function(){
	var i=0;
	var n=$('.ques').size();
	var lists=$('.ques');
	var myansewr=[];
	var trueanswer=[1,2,3,4,5,6,7,8,9,10];
	lists.hide();
	lists.first().show();
	
	$('label').click(function(){
		var flag=0;
	if(i==0){
	var flag=0;
	var obj1=document.getElementsByName('t1');
	for(var k=0;k<obj1.length;k++){
		if(obj1[k].checked){
			flag=1;
			var a1=obj1[k].value;
			myansewr.push(k+1);
			}
		}
		// if( flag==0){
		// 	i--;
		// 	//alert("请选择");
		// 	}
			}
	
	
	if(i==1){
		var flag=0;
	var obj2=document.getElementsByName('t2');
	for(var k=0;k<obj2.length;k++){
		if(obj2[k].checked){
			myansewr.push(k+1);
			var a2=obj2[k].value;
			flag=1;
			}
		}
		// if(flag==0){
		// 	i--;
		// 	//alert("请选择");
		// 	}
		}
	
	if(i==2){
		var flag=0;
		var obj3=document.getElementsByName('t3');
	for(var k=0;k<obj3.length;k++){
		if(obj3[k].checked){
			flag=1;
			var a2=obj3[k].value;
			myansewr.push(k+1);
			}
		}
		// if(flag==0){
		// 	i--;
		// 	//alert("请选择");
		// 	}
		}


		if(i==3){
		var flag=0;
		var obj4=document.getElementsByName('t4');
	for(var k=0;k<obj4.length;k++){
		if(obj4[k].checked){
			flag=1;
			var a3=obj4[k].value;
			myansewr.push(k+1);
			}
		}
		// if(flag==0){
		// 	i--;
		// 	//alert("请选择");
		// 	}
		}


		if(i==4){
		var flag=0;
		var obj5=document.getElementsByName('t5');
	for(var k=0;k<obj5.length;k++){
		if(obj5[k].checked){
			flag=1;
			var a4=obj5[k].value;
			myansewr.push(k+1);
			}
		}
		// if(flag==0){
		// 	i--;
		// 	//alert("请选择选项");
		// 	}
		}


		if(i==5){
		var flag=0;
		var obj6=document.getElementsByName('t6');
	for(var k=0;k<obj6.length;k++){
		if(obj6[k].checked){
			flag=1;
			var a5=obj6[k].value;
			myansewr.push(k+1);
			}
		}
		// if(flag==0){
		// 	i--;
		// 	//alert("请选择选项");
		// 	}
		}

		if(i==6){
		var flag=0;
		var obj7=document.getElementsByName('t7');
	for(var k=0;k<obj7.length;k++){
		if(obj7[k].checked){
			flag=1;
			var a6=obj7[k].value;
			myansewr.push(k+1);
			}
		}
		// if(flag==0){
		// 	i--;
		// 	//alert("请选择选项");
		// 	}
		}
	


	if(i==7){
		var flag=0;
		var obj8=document.getElementsByName('t8');
	for(var k=0;k<obj8.length;k++){
		if(obj8[k].checked){
			flag=1;
			var a7=obj8[k].value;
			myansewr.push(k+1);
			}
		}
		// if(flag==0){
		// 	i--;
		// 	}
		}



	if(i==8){
		var flag=0;
		var obj9=document.getElementsByName('t9');
	for(var k=0;k<obj9.length;k++){
		if(obj9[k].checked){
			flag=1;
			var a8=obj9[k].value;
			myansewr.push(k+1);
			}
		}
		// if(flag==0){
		// 	i--;
		// 	}
		}

	if(i==9){
		var flag=0;
		var obj3=document.getElementsByName('t10');
	for(var k=0;k<obj10.length;k++){
		if(obj10[k].checked){
			flag=1;
			var a9=obj10[k].value;
			myansewr.push(k+1);
			}
		}
		// if(flag==0){
		// 	i--;
		// 	//alert("请选择选项");
		// 	}
		}

	if(i==n-1){
		var flag=0;
		var obj10=document.getElementsByName('t10');
	for(var k=0;k<obj10.length;k++){
		if(obj10[k].checked){
			var a10=obj10[k].value;
			myansewr.push(k+1);
			flag=1;
			}
		}
		// if(flag==0){
		// 	i--;
		// 	//alert("请选择选项");
		// 	}

		// $('.nextQues').text("提交");
		// if($('.nextQues').text()=="提交"){
		// 	$('.nextQues').click(function(){
		// 		alert("你的答案是："+myansewr);
		// 		if(myansewr.toString()==trueanswer.toString()){
		// 			alert("恭喜全部答对");
		// 			}else{
		// 				alert("Be more careful!");
		// 				}
		// 		})
		// 	}
		}
		
		i++;
		lists.eq(i).show();
		lists.eq(i).siblings().hide();
		})
		
	
	})