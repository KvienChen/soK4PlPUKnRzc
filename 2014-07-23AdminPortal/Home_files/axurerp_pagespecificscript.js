for(var i = 0; i < 13; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
document.getElementById('u0_img').tabIndex = 0;

u0.style.cursor = 'pointer';
$axure.eventManager.click('u0', function(e) {

if (true) {

	SetPanelVisibility('u2','toggle','fade',500);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u7'] = 'top';