function CEndPanel(){
    
    var _oBg;
    var _oScoreText;
    var _oMsgText;
    var _oRestartBut;
    var _oGroup;
    
    this._init = function(){
        _oGroup = new createjs.Container();
        _oGroup.visible=false;
        s_oStage.addChild(_oGroup);
        
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('gameover_bg'));
        _oGroup.addChild(_oBg);

        _oMsgText = new createjs.Text("","80px "+FONT_GAME, "#FFCC00");
        _oMsgText.x = CANVAS_WIDTH/2;
        _oMsgText.y = (CANVAS_HEIGHT/2)-132;
        _oMsgText.textAlign = "center";
        _oMsgText.shadow = new createjs.Shadow("#000", 2, 2, 2);
        _oGroup.addChild(_oMsgText);

        _oScoreText = new createjs.Text("","50px "+FONT_GAME, "#FFCC00");
        _oScoreText.x = CANVAS_WIDTH/2;
        _oScoreText.y = (CANVAS_HEIGHT/2) + 52;
        _oScoreText.shadow = new createjs.Shadow("#000", 2, 2, 2);
        _oScoreText.textAlign = "center";
        _oGroup.addChild(_oScoreText);
        
        var oSprite = s_oSpriteLibrary.getSprite('but_play');
        _oRestartBut = new CTextButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -280,oSprite,TEXT_RESTART,FONT_GAME,"#ffc600",60,_oGroup);
        _oRestartBut.addEventListener(ON_MOUSE_UP, this._onButRestartRelease, this);
    };
    
    this.unload = function(){
        _oGroup.off("mousedown",this._onExit);
    };
    
    this._initListener = function(){
        _oGroup.on("mousedown",this._onExit);
    };
    
    this.show = function(iScore){
        _oMsgText.text = TEXT_GAMEOVER;
        _oScoreText.text = TEXT_SCORE +": "+iScore;
        
        _oGroup.visible = true;
        
        $(s_oMain).trigger("save_score",iScore);
        $(s_oMain).trigger("show_interlevel_ad");
    };
    
    this._onExit = function(){
        _oGroup.off("mousedown",this._onExit);
        s_oStage.removeChild(_oGroup);
        
        s_oGame.onExit();
    };
    
    this._onButRestartRelease = function(){
        s_oStage.removeAllChildren();
        
        $(s_oMain).trigger("restart_level",1);
        s_oMain.gotoGame();
    };
    
    this._init();
    
    return this;
}