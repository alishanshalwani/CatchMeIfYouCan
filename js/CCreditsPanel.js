function CCreditsPanel(){
    
    var _oBg;
    var _oButLogo;
    var _oButExit;
    var _oFade;
    
    var _oHitArea;
    
    var _pStartPosExit;
    var _oListener;
    
    var _oContainer;
    
    this._init = function(){
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        s_oStage.addChild(_oFade);
        new createjs.Tween.get(_oFade).to({alpha:0.7},500);
        
        var oSpriteMsgBox = s_oSpriteLibrary.getSprite('help_bg');
        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);

        
        _oBg = createBitmap(oSpriteMsgBox);
        _oContainer.addChild(_oBg);
        
        _oHitArea = new createjs.Shape();
        _oHitArea.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oHitArea.alpha = 0.01;
        _oListener = _oHitArea.on("click", this._onLogoButRelease);
        _oContainer.addChild(_oHitArea);
                
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: 715 , y: 460};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, _oContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);
        
        var oMsgTextBack = new createjs.Text(TEXT_CREDITS_DEVELOPED, "44px " + FONT_GAME, "#000");
        oMsgTextBack.textAlign = "center";
        oMsgTextBack.textBaseline = "alphabetic";
	oMsgTextBack.x = CANVAS_WIDTH/2 + 2;
        oMsgTextBack.y = CANVAS_HEIGHT/2 - 48;
	_oContainer.addChild(oMsgTextBack);
        
        var oMsgText = new createjs.Text(TEXT_CREDITS_DEVELOPED, "44px " + FONT_GAME, "#FFCC00");
        oMsgText.textAlign = "center";
        oMsgText.textBaseline = "alphabetic";
	oMsgText.x = CANVAS_WIDTH/2 ;
        oMsgText.y = CANVAS_HEIGHT/2 - 50;
	_oContainer.addChild(oMsgText);
		
        oSprite = s_oSpriteLibrary.getSprite('logo_ctl');
        _oButLogo = createBitmap(oSprite);
        _oButLogo.regX = oSprite.width/2;
        _oButLogo.regY = oSprite.height/2;
        _oButLogo.x = CANVAS_WIDTH/2;
        _oButLogo.y = CANVAS_HEIGHT/2;
        _oContainer.addChild(_oButLogo);
        
        var oLinkBack = new createjs.Text("www.codethislab.com", "38px " + FONT_GAME, "#000");
        oLinkBack.textAlign = "center";
        oLinkBack.textBaseline = "alphabetic";
	oLinkBack.x = CANVAS_WIDTH/2 + 2;
        oLinkBack.y = CANVAS_HEIGHT/2 + 82;
        _oContainer.addChild(oLinkBack);
        
        var oLink = new createjs.Text("www.codethislab.com", "38px " + FONT_GAME, "#FFCC00");
        oLink.textAlign = "center";
        oLink.textBaseline = "alphabetic";
	oLink.x = CANVAS_WIDTH/2;
        oLink.y = CANVAS_HEIGHT/2 + 80;
        _oContainer.addChild(oLink);
        
        _oContainer.alpha = 0;
	new createjs.Tween.get(_oContainer).to({alpha:1},1000, createjs.Ease.cubicOut);	
    };
    
    this.unload = function(){
        _oHitArea.off("click", _oListener);
        
        _oButExit.unload(); 
        _oButExit = null;
        
        s_oStage.removeChild(_oFade);
        s_oStage.removeChild(_oContainer);
    };
    
    this._onLogoButRelease = function(){
        window.open("http://www.codethislab.com/index.php?&l=en","_blank");
    };
    
    this._init();
    
    
};


