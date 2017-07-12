var Animate = (function() {
	function _Animate($ct) {
		this.$ct = $ct;
		this.init();
		this.bind();
	}

	//绑定元素，初始化数据
	_Animate.prototype.init = function() {
			var $foldingBtn = this.$foldingBtn = this.$ct.find('.folding_page'),
				$ulPage = this.$ulPage = this.$ct.find('.content_inside_items_children'),
				$addChild = this.$addChild = this.$ct.find('.add_li'),
				$addParent = this.$addParent = this.$ct.find('.add_new_parent'),
				$parentUlPage = this.$parentUlPage = this.$ct.find('.content_inside_items'),
				$inputText = this.$inputText = this.$ct.find('.text_of')

			this.dragNode(this.$ulPage)
		}
		//绑定事件
	_Animate.prototype.bind = function() {
		var that = this
		$(document).on('click', '.add_li', function(e) {
			var childIndex = that.$addChild.index(this);
			newLi = "<li class='items_children_li'><p></p><p class='video_link add_link_color'>+关联视频</p></li>"
			$(this).siblings('ul').append(newLi)
		})

		this.$addParent.on('click', function() {
			parentLi = "<li><div class='content_inside_li_title'><h3><span class='folding_page'>></span><span class='text_of'>请输入标题</span></h3><div class='icon'><i>托</i><i>删</i></div></div><ul class='content_inside_items_children'></ul><div class='add_li add_link_color'><p><span>+</span>新增</p></div></li>"
			that.$parentUlPage.append(parentLi)
		})

		$(document).on('click', '.folding_page', function(e) {
			var Index = $('.folding_page').index(this)
			$('.content_inside_items_children').eq(Index).toggle('normal')
			$('.add_li').eq(Index).toggle('normal')
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

	_Animate.prototype.dragNode = function(node) {
		var that = this

		$(document).off("mousedown").mousedown('li', function(e) {
			//console.log(e.target.className)
			if (e.which != 1 || $(e.target).is("input, textarea") || window.kp_only) return false; //清除非左击的事件
			if (e.target.className == 'content_inside_li_title' || e.target.className == 'items_children_li') {
				if (e.target.nodeName == 'DIV') {
					$(e.target).parent().parent().find('.content_inside_items_children').fadeOut()
					$(e.target).parent().parent().find('.add_li').fadeOut()
				}
				e.preventDefault() // 阻止默认事件

				var x = e.pageX,
					y = e.pageY,
					_this = $(e.target), //点击的选中块
					w = _this.width(),
					h = _this.height(),
					w2 = w / 2,
					h2 = h / 2
				p = _this.position(),
					o = _this.offset(),
					left = p.left,
					ltop = p.top,
					kp_only = true

				//添加虚线框架
				_this.before('<li id="kp_widget_holder"></li>')
				var wid = $('#kp_widget_holder')
				wid.css({
					"border": "2px dashed #ccc",
					"height": _this.outerHeight(true),
				})

				//保持原有宽高
				_this.css({
					"width": w,
					"height": h,
					"position": "absolute",
					opacity: 0.8,
					"z-index": 99,
					"left": left,
					"top": ltop
				});

				$(document).mousemove(function(e) {

					e.preventDefault();
					// 移动选中块
					var l = left + e.pageX - x;
					var t = ltop + e.pageY - y;
					_this.css({
						"left": l,
						"top": t
					});
					// 选中块的中心坐标
					var ml = l + w2;
					var mt = t + h2;
					// 遍历所有块的坐标
					$(node).children().not(_this).not(wid).each(function(i) {
						var obj = $(this);
						var p = obj.offset();
						var a1 = p.left;
						var a2 = p.left + obj.width();
						var a3 = p.top;
						var a4 = p.top + obj.height();
						console.log(this)
						// 移动虚线框
						if (a1 < ml && ml < a2 && a3 < mt && mt < a4) {
							console.log(1)
							if (!obj.next("#kp_widget_holder").length) {
								wid.insertAfter(this);
							} else {
								wid.insertBefore(this);
							}
							return;
						}
					});
				})
			} //去除所有非li元素的条件
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