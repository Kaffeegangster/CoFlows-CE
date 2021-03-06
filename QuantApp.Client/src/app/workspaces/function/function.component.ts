import {Component} from '@angular/core';

import { QuantAppComponent } from '../../quantapp/core/quantapp.component';

import { ActivatedRoute } from '@angular/router';

import 'codemirror/mode/mllike/mllike.js';
import 'codemirror/mode/clike/clike.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/vb/vb.js';
import 'codemirror/mode/javascript/javascript.js';

import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';

import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/xml-fold.js';

import * as CodeMirror from 'codemirror/lib/codemirror.js';

@Component({
  selector: 'function-view',
  styles: [`
  :host >>> .CodeMirror {
    height: auto;
  }
  `],
  templateUrl: 'function.component.html'
})
export class FunctionComponent{
    
    code = '...';
    editorOptionsFs = {
        lineWrapping: false,
        lineNumbers: true,
        readOnly: true,
        mode: 'text/x-fsharp',//, text/x-cython',
        foldGutter: {
            rangeFinder: CodeMirror.fold.combine(CodeMirror.fold.indent, CodeMirror.fold.comment)             
        },
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

        indentUnit: 4,
        extraKeys:{
            Tab:  cm => {
                if (cm.doc.somethingSelected()) {
                    return CodeMirror.Pass;
                }
                var spacesPerTab = cm.getOption("indentUnit");
                console.log(spacesPerTab)
                var spacesToInsert = spacesPerTab - (cm.doc.getCursor("start").ch % spacesPerTab);    
                var spaces = Array(spacesToInsert + 1).join(" ");
                cm.replaceSelection(spaces, "end", "+input");
            }
        },
        
    };

    editorOptionsCs = {
        lineWrapping: false,
        lineNumbers: true,
        readOnly: true,
        mode: 'text/x-csharp',//, text/x-cython',
        foldGutter: {
            rangeFinder: CodeMirror.fold.combine(CodeMirror.fold.indent, CodeMirror.fold.comment)             
        },
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

        indentUnit: 4,
        extraKeys:{
            Tab:  cm => {
                if (cm.doc.somethingSelected()) {
                    return CodeMirror.Pass;
                }
                var spacesPerTab = cm.getOption("indentUnit");
                console.log(spacesPerTab)
                var spacesToInsert = spacesPerTab - (cm.doc.getCursor("start").ch % spacesPerTab);    
                var spaces = Array(spacesToInsert + 1).join(" ");
                cm.replaceSelection(spaces, "end", "+input");
            }
        },
        
    };

    editorOptionsJava = {
        lineWrapping: false,
        lineNumbers: true,
        readOnly: true,
        mode: 'text/x-java',//, text/x-cython',
        foldGutter: {
            rangeFinder: CodeMirror.fold.combine(CodeMirror.fold.indent, CodeMirror.fold.comment)             
        },
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

        indentUnit: 4,
        extraKeys:{
            Tab:  cm => {
                if (cm.doc.somethingSelected()) {
                    return CodeMirror.Pass;
                }
                var spacesPerTab = cm.getOption("indentUnit");
                console.log(spacesPerTab)
                var spacesToInsert = spacesPerTab - (cm.doc.getCursor("start").ch % spacesPerTab);    
                var spaces = Array(spacesToInsert + 1).join(" ");
                cm.replaceSelection(spaces, "end", "+input");
            }
        },
        
    };

    editorOptionsScala = {
        lineWrapping: false,
        lineNumbers: true,
        readOnly: true,
        mode: 'text/x-scala',//, text/x-cython',
        foldGutter: {
            rangeFinder: CodeMirror.fold.combine(CodeMirror.fold.indent, CodeMirror.fold.comment)             
        },
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

        indentUnit: 4,
        extraKeys:{
            Tab:  cm => {
                if (cm.doc.somethingSelected()) {
                    return CodeMirror.Pass;
                }
                var spacesPerTab = cm.getOption("indentUnit");
                console.log(spacesPerTab)
                var spacesToInsert = spacesPerTab - (cm.doc.getCursor("start").ch % spacesPerTab);    
                var spaces = Array(spacesToInsert + 1).join(" ");
                cm.replaceSelection(spaces, "end", "+input");
            }
        },
        
    };

    editorOptionsVb = {
        lineWrapping: false,
        lineNumbers: true,
        readOnly: true,
        mode: 'text/x-vb',//, text/x-cython',
        foldGutter: {
            rangeFinder: CodeMirror.fold.combine(CodeMirror.fold.indent, CodeMirror.fold.comment)             
        },
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

        indentUnit: 4,
        extraKeys:{
            Tab:  cm => {
                if (cm.doc.somethingSelected()) {
                    return CodeMirror.Pass;
                }
                var spacesPerTab = cm.getOption("indentUnit");
                console.log(spacesPerTab)
                var spacesToInsert = spacesPerTab - (cm.doc.getCursor("start").ch % spacesPerTab);    
                var spaces = Array(spacesToInsert + 1).join(" ");
                cm.replaceSelection(spaces, "end", "+input");
            }
        },
        
    };

    editorOptionsPy = {
        lineWrapping: false,
        lineNumbers: true,
        readOnly: true,
        mode: 'text/x-cython',//, text/x-cython',
        foldGutter: {
            rangeFinder: CodeMirror.fold.combine(CodeMirror.fold.indent, CodeMirror.fold.comment)             
        },
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

        indentUnit: 4,
        extraKeys:{
            Tab:  cm => {
                if (cm.doc.somethingSelected()) {
                    return CodeMirror.Pass;
                }
                var spacesPerTab = cm.getOption("indentUnit");
                console.log(spacesPerTab)
                var spacesToInsert = spacesPerTab - (cm.doc.getCursor("start").ch % spacesPerTab);    
                var spaces = Array(spacesToInsert + 1).join(" ");
                cm.replaceSelection(spaces, "end", "+input");
            }
        },
        
    };

    editorOptionsJs = {
        lineWrapping: false,
        lineNumbers: true,
        readOnly: true,
        mode: 'text/javascript',//, text/x-cython',
        foldGutter: {
            rangeFinder: CodeMirror.fold.combine(CodeMirror.fold.indent, CodeMirror.fold.comment)             
        },
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

        indentUnit: 4,
        extraKeys:{
            Tab:  cm => {
                if (cm.doc.somethingSelected()) {
                    return CodeMirror.Pass;
                }
                var spacesPerTab = cm.getOption("indentUnit");
                console.log(spacesPerTab)
                var spacesToInsert = spacesPerTab - (cm.doc.getCursor("start").ch % spacesPerTab);    
                var spaces = Array(spacesToInsert + 1).join(" ");
                cm.replaceSelection(spaces, "end", "+input");
            }
        },
        
    };

    pyCode = false
    csCode = false
    vbCode = false
    jsCode = false
    javaCode = false
    scalaCode = false

    func = {
        Add : '',
        Body : '',
        Description : '',
        Exchange : '',
        ID : '',
        Job : '',
        Load : '',
        MID : '',
        Name : '',
        Remove : '',
        ScheduleCommand : '',
        Started : false,
        Code: []
    }

    files = []
    fileidx = 0

    workspace = {
        Permissions: []
    }

    permission = -1
    permissionSet = false

    constructor(private activatedRoute: ActivatedRoute, private quantapp: QuantAppComponent){

        this.activatedRoute.params.subscribe(params => {
            let id = params['id']
            let wid = params['wid'];

        
        //this.quantapp.Get('m/workspace?id=Freepoint_WorkSpace',
        //    data =>
            this.quantapp.LinkAction(wid,
                data => { //Load

                    this.workspace = data[0].Value
                    // console.log(this.workspace)

                    this.workspace.Permissions.forEach(x => {
                        if(x.ID == this.quantapp.quser.User.Email) this.permission = x.Permission
                    })

                    if(this.permission == 2){
                        this.editorOptionsFs.readOnly = false
                        this.editorOptionsCs.readOnly = false
                        this.editorOptionsVb.readOnly = false
                        this.editorOptionsPy.readOnly = false
                        this.editorOptionsJs.readOnly = false
                        this.editorOptionsJava.readOnly = false
                        this.editorOptionsScala.readOnly = false
                    }

                    this.permissionSet = true
                },
                data => { //Add
                },
                data => { //Exchange
                },
                data => { //Remove
                }
            )
            
            let fid = id + "-F-MetaData";
            console.log(fid)
            this.quantapp.LinkAction(fid,
                data => { //Load
                    console.log(data)
                    this.func = data[0].Value

                    let i = 0
                    this.func.Code.forEach(pkg => {
                        let name = pkg.Item1
                        let x = pkg.Item2
                        this.files.push(i)
                        i++
                        // this.pyCode = x.startsWith('import clr')
                        this.pyCode = x.startsWith('import clr') || x.startsWith('#py') || name.endsWith('.py')
                        this.csCode = x.startsWith('//cs') || name.endsWith('.cs')
                        this.vbCode = x.startsWith('\'vb') || name.endsWith('.vb')
                        this.jsCode = x.startsWith('//js') || name.endsWith('.js')
                        this.javaCode = x.startsWith('//java') || name.endsWith('.java')
                        this.scalaCode = x.startsWith('//scala') || name.endsWith('.scala')
                    })

                    
                },
                data => { //Add
                },
                data => { //Exchange
                    console.log("exchange",data)

                    this.func = data.Value
                    let i = 0
                    this.files = []
                    this.func.Code.forEach(pkg => {
                        let name = pkg.Item1
                        let x = pkg.Item2
                        
                        this.files.push(i)
                        this.pyCode = x.startsWith('import clr') || x.startsWith('#py') || name.endsWith('.py')
                        this.csCode = x.startsWith('//cs') || name.endsWith('.cs')
                        this.vbCode = x.startsWith('\'vb') || name.endsWith('.vb')
                        this.jsCode = x.startsWith('//js') || name.endsWith('.js')
                        this.javaCode = x.startsWith('//java') || name.endsWith('.java')
                        this.scalaCode = x.startsWith('//scala') || name.endsWith('.scala')
                        i++
                    })
                },
                data => { //Remove
                }
            );
        });

    }

 
    onChangeActive(val){
        //this.func.Started = val == "0"

        this.quantapp.Get('m/activetoggle?id=' + this.func.ID ,
        data => {
            console.log(data)

        });

    
    }

    onChangeFile(val){
        this.fileidx = val
    }

    compilationResult = ''
    submitCode(){
        console.log(this.func)
        this.quantapp.Post('m/createf', 
        this.func,
        data => {                        
            this.compilationResult = data.Result;
        });
    }
    
    onBlur() { }
    onFocus() { }
}