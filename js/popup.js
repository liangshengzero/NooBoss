var canvas=document.createElement("canvas");
canvas.width=128;
canvas.height=128;
var ctx=canvas.getContext('2d');
ctx.font="120px Arial";

chrome.management.getAll(function(appInfoList){
  for(var i=0;i<appInfoList.length;i++){
    console.log(i);
    var appInfo=appInfoList[i];
    var iconImg=undefined;
    var iconUrl=undefined;
    if(appInfo.icons){
      var maxSize=0;
      for(var j=0;j<appInfo.icons.length;j++){
        var iconInfo=appInfo.icons[j];
        if(iconInfo.size>maxSize){
          maxSize=iconInfo.size;
          iconUrl=iconInfo.url;
        }
      }
    }
    if(!iconUrl){
      ctx.fillStyle="grey";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle="white";
      ctx.fillText(appInfo.name[0],22,110);
      iconUrl=canvas.toDataURL();
    }
    var appDiv=$('<div class="app"></div>');
    var enabled=$('<input type="checkbox" class="app-status-checkbox" id="'+appInfo.id+'-status" />');
    if(appInfo.enabled){
      enabled.attr('checked',true);
    }
    appDiv.append(enabled);
    iconImg=$('<img class="app-icon" src='+iconUrl+' />');
    appDiv.append(iconImg);
    var infoDiv=$('<div class="app-info"</div>');
    infoDiv.append('<label data="'+appInfo.id+'" class="app-status">hello</label>');
    infoDiv.append('<button data="'+appInfo.id+'" class="app-uninstall">no</label>');
    infoDiv.append('<div class="app-version">'+appInfo.version+'</div>');
    infoDiv.append('<span title="'+appInfo.name+'" class="app-name">'+appInfo.name+'</span>');
    appDiv.append(infoDiv);
    $('#appList').append(appDiv);
  }
});