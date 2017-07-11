var Animate = (function() {
	function _Animate($ct) {
		this.$ct = $ct;
		this.init();
		this.bind();
	}
	
	_Animate.prototype.init = function(){
		var $foldingBtn = this.$foldingBtn =  this.$ct.find('.folding_page'),
			$ulPage = this.$ulPage =  this.$ct.find('.content_inside_items_children'),
			$addChild = this.$addChild =  this.$ct.find('.add_li'),
			$addParent = this.$addParent =  this.$ct.find('.add_new_parent'),
			$parentUlPage = this.$parentUlPage =  this.$ct.find('.content_inside_items')
	}
	
	_Animate.prototype.bind = function(){
		this.$addChild.on('click', function(e) {
				var childIndex = this.$addChild.index(this);
				newLi = "<li><p></p><p class='video_link add_link_color'>+关联视频</p></li>"
				$(this).before(newLi)
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