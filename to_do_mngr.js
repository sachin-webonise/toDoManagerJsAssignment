$(document).ready(function(){
	$("#dialogForm").hide();
	$("#subTextBox").hide();
	$li_id=0;
	$("#textBox").hide();
	$.textBoxHidden=true;
	$("#addBtn").click(function(event){
		//alert("add clicked...");
		if ($.textBoxHidden) {
			
			$("#textBox").show();
			$("#textBox").focus();

			$.textBoxHidden=false;
		}//end if
		else
		{
			$("#textBox").hide();
			$.textBoxHidden=true;
			$.addItemToList();
		}//end else

	});//end $("#addBtn").click(function(event)

	$.addItemToList = function(){

		$.textBoxContent = document.getElementById("textBox").value;
		document.getElementById("textBox").value="";
		//$li_id=$li_id+1;
		$.itemToBeAppended="<li id="+$.textBoxContent+" onclick='$.addSubElem(this)'>"+$.textBoxContent+"</li>";
		$("#ol_id").append($.itemToBeAppended);
	}//end $.addItemToList = function()

	$.addSubElem = function(clickedLi){
		//clickedLi.id="clickedItem"
		alert("In addSubElement function: "+clickedLi.id);
		//$('element_to_pop_up').bPopup();
		$("#dialogForm").dialog("open");
		//$("#dialogForm").show();
		//alert("You have clicked "+this);
	}
	// $(function() {
	
	$("#dialogForm").dialog({
		autoOpen: false,
		height: 400,
		width: 550,
		modal: true,
		buttons: {
			Cancel: function() {
			  $(this).dialog("close");
			}
		}

	});

	// });

	$.subTextBoxHidden=true;
	$("#addSubElement").click(function(event){
		//alert("addSubElement clicked...");
		if ($.subTextBoxHidden) {
			
			$("#subTextBox").show();
			$("#subTextBox").focus();

			$.subTextBoxHidden=false;
		}//end if
		else
		{
			$("#subTextBox").hide();
			$.subTextBoxHidden=true;
			$.addSubElemToList();
		}//end else
	});//end $("#addBtn").click(function(event)

	$.addSubElemToList = function(){

		$.subTextBoxContent = document.getElementById("subTextBox").value;
		document.getElementById("subTextBox").value="";
		//$li_id=$li_id+1;
		$.subElement="<li>"+$.subTextBoxContent+"<input type='button' value='edit'>"+
		"<input type='button' value='delete'> </li>";
		$("#sub_ol_id").append($.subElement);
	}//end $.addItemToList = function()
});//end document.ready
