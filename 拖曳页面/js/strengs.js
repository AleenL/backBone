var Animate = (function() {
	function _Animate($ct) {
		this.$ct = $ct;
		this.init();
		this.bind();
	}

	_Animate.prototype.init = function() {
		var $foldingBtn = this.$foldingBtn = this.$ct.find('.folding_page'),
			$ulPage = this.$ulPage = this.$ct.find('.content_inside_items_children'),
			$addChild = this.$addChild = this.$ct.find('.add_li'),
			$addParent = this.$addParent = this.$ct.find('.add_new_parent'),
			$parentUlPage = this.$parentUlPage = this.$ct.find('.content_inside_items'),
			$inputText = this.$inputText = this.$ct.find('.text_of')
	}

	_Animate.prototype.bind = function() {
		var that = this
		$(document).on('click', '.add_li',function(e) {
			var childIndex = that.$addChild.index(this);
			newLi = "<li><p></p><p class='video_link add_link_color'>+关联视频</p></li>"
			$(this).before(newLi)
		})

		this.$addParent.on('click', function() {
			parentLi = "<li><div><h3><span class='folding_page'>></span><span class='text_of'>请输入标题</span></h3><div class='icon'><i>托</i><i>删</i></div></div><ul class='content_inside_items_children'><li class='add_li add_link_color'><p><span>+</span>新增</p></li></ul></li>"
			that.$parentUlPage.append(parentLi)
		})

		this.$foldingBtn.on('click', function(e) {
			var Index = that.$foldingBtn.index(this)
			that.$ulPage.eq(Index).toggle('normal')
		})

		$(document).on('click', '.text_of', function(e) {
			var td = $(e.target);
			var txt = td.text();
			var input = $("<input type='text' style='width:200px' value='" + txt + "'/>");
			td.html(input);
			td.css({
				'overflow': 'visible	',
				'position': 'absolute',
				'z-index': '22',
				'text-overflow': 'normal',
				'top': '0',
				'left': '0'
			})
			input.click(function() {
				return false;
			});
			//获取焦点 
			input.trigger("focus");
			//文本框失去焦点后提交内容，重新变为文本 
			input.blur(function() {
				var newtxt = $(this).val();
				//判断文本有没有修改 
				td.html(newtxt);
				td.css({
					'overflow': 'hidden',
					'position': 'relative',
					'text-overflow': 'ellipsis',
				})
			})
		})
	}
	return {
		init: function($ct) {
			$ct.each(function(index, node) {
				new _Animate($(node))
			})
		}
	}
})()

Animate.init($('body'))