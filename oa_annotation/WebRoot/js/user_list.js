$().ready(function(){
    $("input[name='allcheck']").unbind("click");
    $("input[name='allcheck']").bind('click', function() {
      $(this).controlcheckbox("userCheckBox");
    });
});
