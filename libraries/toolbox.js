function ToolManager(){
this.tools= null;
this.activeTool = null;

this.addTool = function(newTool){

    var tool = createDiv('<img src="' + newTool.icon + '" class="tool-icon"><span>' + newTool.toolText + '</span>');
    tool.addClass ("tool");
    var parentElent = select(" .tool-list");
    tool.parent(parentElent);
    tool.parent("placeholder");    
  

}
}