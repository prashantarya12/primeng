import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'badge-overlay-demo',
    template: `
        <app-docsectiontext>
            <p>
                A badge can be added to any element by encapsulating the content with the <i>OverlayBadge</i> component.
            </p>
        </app-docsectiontext>
        <div class="card flex flex-wrap justify-center gap-6">
            <p-overlayBadge value="2">
                <i class="pi pi-bell" style="font-size: 2rem"></i>
            </p-overlayBadge>
            <p-overlayBadge value="4" severity="danger">
                <i class="pi pi-calendar" style="font-size: 2rem"></i>
            </p-overlayBadge>
            <p-overlayBadge severity="danger">
                <i class="pi pi-envelope" style="font-size: 2rem"></i>
            </p-overlayBadge>
        </div>
        <app-code [code]="code" selector="badge-overlay-demo"></app-code>
    `,
})
export class OverlayDoc {
    code: Code = {
        basic: `<p-overlayBadge value="2">
    <i class="pi pi-bell" style="font-size: 2rem"></i>
</p-overlayBadge>
<p-overlayBadge value="4" severity="danger">
    <i class="pi pi-calendar" style="font-size: 2rem"></i>
</p-overlayBadge>
<p-overlayBadge severity="danger">
    <i class="pi pi-envelope" style="font-size: 2rem"></i>
</p-overlayBadge>`,
        html: `<div class="card flex flex-wrap justify-center gap-6">
    <p-overlayBadge value="2">
        <i class="pi pi-bell" style="font-size: 2rem"></i>
    </p-overlayBadge>
    <p-overlayBadge value="4" severity="danger">
        <i class="pi pi-calendar" style="font-size: 2rem"></i>
    </p-overlayBadge>
    <p-overlayBadge severity="danger">
        <i class="pi pi-envelope" style="font-size: 2rem"></i>
    </p-overlayBadge>
</div>`,
        typescript: `import { Component } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
    selector: 'badge-overlay-demo',
    templateUrl: './badge-overlay-demo.html',
    standalone: true,
    imports: [OverlayBadgeModule]
})
export class BadgeOverlayDemo {}`,
    };
}
