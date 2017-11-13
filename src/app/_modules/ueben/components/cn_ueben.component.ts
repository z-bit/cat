import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSelectChange} from '@angular/material';
import { Http } from '@angular/http';

import { Router } from '@angular/router';
import { Observable, Subscriber, Operator } from 'rxjs';
import { Firma } from 'app/components/md_firma.model';


import { Store } from '@ngrx/store';
import * as storeIndex from '../../../store/index';
import * as moduleActions from '../../../store/module.actions';

import * as jsPDF from 'jspdf';
// import * as pdfMake from 'pdfmake';
declare const pdfMake: any;
declare const buildPdf: any;
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'cat-ueben',
    template: `
        <p>ueben works!</p>
        <hr>
        <mat-tab-group [selectedIndex]="tabIndex">
            <mat-tab label="Steuerung">
                <mat-card>
                    <button (click)="createMyPdf()">Create a PDF</button>
                    <button (click)="makePdf()">pdfMake</button>
                </mat-card>
            </mat-tab>
            <mat-tab label="Liste">
                
                <mat-card *ngIf="pdfSrc">
                    <div class="list">
                        <pdf-viewer
                            [src]="pdfSrc"
                            [page]="page"
                            [render-text]="false"
                            [rotation]="0"
                            [original-size]="true"
                            [zoom]="0.8"
                            style="display: block;"
                        ></pdf-viewer>
                    </div>
                    <div>
                        <button (click)="page=page-1">prev</button>
                        page: {{page}}
                        <button (click)="page=page+1">next</button>
                        <br>
                        <button (click)="pdfSrc=''; tabIndex=0;">Close PDF</button>
                    </div>
                </mat-card>
                
                <mat-card *ngIf="makeSrc">
                    <object
                        type="application/pdf"
                        width="100%"
                        class="list"
                        id="makeListe"
                        [data]="makeUrl()"
                    >
                        Bitte warten, die Liste wird generiert!
                    </object>
                    <button (click)="makeClose()">Close</button>
                </mat-card>
             
            </mat-tab>
        </mat-tab-group>
        
        
    `,
    styles: [`
        mat-card {
            margin: 10px;
        }
        .list {
            height: 600px;
            overflow: scroll;
        }
    `]
})
export class UebenComponent implements OnInit {
    firma$: Observable<Firma>;
    pdfSrc: string = '';
    makeSrc: string = '';
    page: number = 1;
    tabIndex = 0;
    
    
    constructor(
        private store: Store<storeIndex.State>,
        private router: Router,
        private http: Http,
        private sanitizer: DomSanitizer
        
        
    ) {
        // this.store.dispatch(new moduleActions.SetAction('Ueben'));
        this.firma$ = store.select(storeIndex.getFirma);
    }

    ngOnInit() {
        /*
        this.firma$.subscribe(firma => {
            if (!firma.fa) this.router.navigate(['/home']);
        });
        */
        
    }
    
    makePdf() {
        
        let docDefinition = {
            content: [
                // if you don't need styles, you can use a simple string to define a paragraph
                'This is a standard paragraph, using default style',
            
                // using a { text: '...' } object lets you set styling properties
                { text: 'This paragraph will have a bigger font', fontSize: 15 },
            
                // if you set pass an array instead of a string, you'll be able
                // to style any fragment individually
                {
                    text: [
                        'This paragraph is defined as an array of elements to make it possible to ',
                        { text: 'restyle part of it and make it bigger ', fontSize: 15 },
                        'than the rest.'
                    ]
                }
            ]
        };
        const pdf = pdfMake.createPdf(docDefinition);
        //pdf.download('test.pdf');
        //pdf.open();
        //pdf.print();
        pdf.getDataUrl(url => this.makeSrc = url);
        this.tabIndex = 1;
    }
    makeUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.makeSrc)
    }
    makeClose() {
        this.makeSrc = '';
        this.tabIndex = 0;
    }
    
    checkFile(file: string): Promise<boolean> {
        return this.http
            .head(file)
            .map( () => this.http.delete(file) )
            .catch( error => Observable.of(true) )
            .toPromise()
        ;
    }
    /*
    deleteFile(file: string): Promise<boolean> {
        return this.http
            .delete(file)
            .toPromise()
            //.mapTo(true)
            //.catch( error => Observable.of(false) )
            //.toPromise()
        ;
    }
    */
    createMyPdf() {
        const pdf: string = 'app/assets/TempList.pdf';
        const path: string = '~/Downloads/' + pdf;
        
        let doc = new jsPDF();
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.addPage();
        doc.text(20, 20, 'Do you like that?');
        this.pdfSrc = doc.output('datauristring');
        this.tabIndex = 1;
        this.makeSrc='ok';
    /*
        this.checkFile(pdf)
            .then( () => {
                doc.save(pdf);
                this.pdfSrc = path;
                console.log(this.pdfSrc);
            })
        ;
    */
        
        
    }
    
    
}

