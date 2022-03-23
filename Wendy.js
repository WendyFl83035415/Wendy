<script language="javascript" type="text/javascript">
<!--
function copy_clip(meintext)
{
 if (window.clipboardData)
   {
   // для IE
   window.clipboardData.setData("Text", meintext);
   }
   else if (window.netscape)
   {
	try {
	if (netscape.security.PrivilegeManager.enablePrivilege)
	   netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	   // netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead');
	   // netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserWrite")
	} catch (e) {alert('Настройка безопасности браузера не позволяет обращаться к буферу обмена!\n'+e); return;}

	   var clip = Components.classes['@mozilla.org/widget/clipboard;1']
	                 .createInstance(Components.interfaces.nsIClipboard);
	   //alert(clip);
	   if (!clip) return;

	   var trans = Components.classes['@mozilla.org/widget/transferable;1']
	                  .createInstance(Components.interfaces.nsITransferable);
	   if (!trans) return;

	   trans.addDataFlavor('text/unicode');

	   var str = new Object();
	   var len = new Object();

	   var str = Components.classes["@mozilla.org/supports-string;1"]
	                .createInstance(Components.interfaces.nsISupportsString);

	   var copytext=meintext;

	   str.data=copytext;

	   trans.setTransferData("text/unicode",str,copytext.length*2);

	   var clipid=Components.interfaces.nsIClipboard;

	   if (!clip) return false;

	   clip.setData(trans,null,clipid.kGlobalClipboard);

   }
   alert("В буфер обмена сохранено:\n\n" + meintext);
   return false;
}
//-->
</script>


<form name="main" method="post">
<textarea name="code" style="width: 550px; height: 200px">
Напишите здесь любой тескст, который будет
сохранен в ClipBoard.
После этого нажмите кнопку "Скопировать в буфер обмена".
</textarea>
</form>

<form onsubmit="return false;">
	<input type="submit" value="Скопировать в буфер обмена" onclick="copy_clip(document.forms.main.elements.code.value);">
</form>
