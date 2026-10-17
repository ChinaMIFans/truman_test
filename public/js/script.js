$(window).on("load", function() {
    $('.ui.tiny.post.modal').modal({
        observeChanges: true
    });

    // Add new post Modal functionality
    $("#newpost, a.item.newpost").click(function() {
        $('.ui.tiny.post.modal').modal('show');
    });

    // new post validator (picture and text can not be empty); using Fomantic UI
    $('#postform').form({
        on: 'blur',
        fields: {
            body: {
                identifier: 'body',
                rules: [{
                    type: 'empty',
                    prompt: '请填写你想分享的内容。'
                }]
            },
            picinput: {
                identifier: 'picinput',
                rules: [{
                    type: 'notExactly[/public/photo-camera.svg]',
                    prompt: '请点击相机图标添加照片。'
                }]
            }
        },
        onSuccess: function(event, fields) {
            $("#postform")[0].submit();
            $('.actions .ui.green.button').addClass('disabled');
            $('.actions .ui.green.button').val('正在发布…');
        }
    });
});
