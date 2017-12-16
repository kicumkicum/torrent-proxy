goog.provide('tp.scenes.MagnetInput');
goog.require('tp.scenes.templates.magnetInput.magnetInput');
goog.require('zb.layers.CuteScene');


/**
 */
tp.scenes.MagnetInput = class extends zb.layers.CuteScene {
	/**
	 */
	constructor() {
		super();

		/**
		 * @type {tp.scenes.templates.magnetInput.MagnetInputOut}
		 * @protected
		 */
		this._exported;

		this._addContainerClass('s-magnet-input');
	}

	/**
	 * @override
	 */
	_renderTemplate() {
		return tp.scenes.templates.magnetInput.magnetInput(this._getTemplateData(), this._getTemplateOptions());
	}
};