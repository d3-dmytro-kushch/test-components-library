import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class Door3ComponentsExampleLibService {
    constructor() { }
}
Door3ComponentsExampleLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: Door3ComponentsExampleLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
Door3ComponentsExampleLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: Door3ComponentsExampleLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: Door3ComponentsExampleLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class Door3ComponentsExampleLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
Door3ComponentsExampleLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: Door3ComponentsExampleLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
Door3ComponentsExampleLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: Door3ComponentsExampleLibComponent, selector: "lib-door3-components-example-lib", ngImport: i0, template: `
    <p>
      door3-components-example-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: Door3ComponentsExampleLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-door3-components-example-lib',
                    template: `
    <p>
      door3-components-example-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class Door3ComponentsExampleLibModule {
}
Door3ComponentsExampleLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: Door3ComponentsExampleLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Door3ComponentsExampleLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: Door3ComponentsExampleLibModule, declarations: [Door3ComponentsExampleLibComponent], exports: [Door3ComponentsExampleLibComponent] });
Door3ComponentsExampleLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: Door3ComponentsExampleLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: Door3ComponentsExampleLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        Door3ComponentsExampleLibComponent
                    ],
                    imports: [],
                    exports: [
                        Door3ComponentsExampleLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of door3-components-example-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Door3ComponentsExampleLibComponent, Door3ComponentsExampleLibModule, Door3ComponentsExampleLibService };
//# sourceMappingURL=door3-components-example-lib.mjs.map
