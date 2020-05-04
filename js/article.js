var t = decodeURI(window.location.href.split("?t=")[1])
        hljs.initHighlightingOnLoad();
        hljs.initLineNumbersOnLoad();
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: true,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
        $.ajax({
            url: 'https://devmeteor.cn/post/' + t + '.md',
            success(res) {
                document.getElementById('content').innerHTML = marked(res);
                $("code").addClass("hljs")
                $(".hljs").each(function (i, block) {
                    hljs.lineNumbersBlock(block)
                })
                $("#content").css("display", "unset")
            },
            error() {
                console.log('fail')
                window.location.href = "../"
            }
        })