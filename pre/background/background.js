import { defaultValues } from './defaultValues';
import { resetSettings, resetIndexedDB, initDefaultValues } from './options';
import Util from './Util';
import Management from './Management';
import listeners from './listeners';
import History from './History';

const NooBoss={};

window.NooBoss = NooBoss;

NooBoss.defaultValues = defaultValues;

NooBoss.resetSettings = resetSettings.bind(NooBoss);

NooBoss.resetIndexedDB = resetIndexedDB.bind(NooBoss, () => {
  NooBoss.Management.init();
  NooBoss.History.init();
});

NooBoss.initDefaultValues = initDefaultValues;

NooBoss.Util = Util;

Management.updateAppInfo = Management.updateAppInfo.bind(NooBoss);
NooBoss.Management = Management;

listeners.onEnabled = listeners.onEnabled.bind(NooBoss);
NooBoss.listeners = listeners;

History.init = History.init.bind(NooBoss);
History.addRecord = History.addRecord.bind(NooBoss);
History.listen = History.listen.bind(NooBoss);
NooBoss.History = History;

NooBoss.init=function(){
  NooBoss.initDefaultValues();
  //a very bad practice, but yeah.
  setTimeout(function(){
    NooBoss.History.init();
    NooBoss.History.listen();
    NooBoss.Management.init();
  },333);
}

document.addEventListener('DOMContentLoaded', function(){
  NooBoss.init()
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if('job' in request){
        if (request.job == 'reset'){
          NooBoss.resetSettings();
          NooBoss.resetIndexedDB();
        }
        else if(request.job == 'clearHistory'){
          NooBoss.History.init();
        }
        else if(request.job == 'autoState'){
          isOn('autoState',
            NooBoss.Management.autoState.enable,
            NooBoss.Management.autoState.disable
          );
        }
        else if(request.job == 'updateAutoStateRules'){
          NooBoss.Management.autoState.updateRules();
        }
        else if(request.job == 'updateGroupList') {
          NooBoss.Management.updateGroupList();
        }
      }
    });
});
