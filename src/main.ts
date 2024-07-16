import '@angular/localize/init';
import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {VERSION as CDK_VERSION} from '@angular/cdk';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';
import {AutocompleteSimpleExample} from './componentes/autocomplete-simple-example/autocomplete-simple-example';

import {BadgeOverviewExample} from './componentes/badge-overview-example/badge-overview-example';
import {BottomSheetOverviewExample} from './componentes/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example';
import {ButtonOverviewExample} from './componentes/button-overview-example/button-overview-example';
import {ButtonToggleOverviewExample} from './componentes/button-toggle-overview-example/button-toggle-overview-example';
import {CardOverviewExample} from './componentes/card-overview-example/card-overview-example';
import {CheckboxOverviewExample} from './componentes/checkbox-overview-example/checkbox-overview-example';
import {ChipsOverviewExample} from './componentes/chips-overview-example/chips-overview-example';
import {MatCommonModule} from '@angular/material/core';
import {DatepickerOverviewExample} from './componentes/datepicker-overview-example/datepicker-overview-example';
import {DialogOverviewExample} from './componentes/dialog-overview-example-dialog/dialog-overview-example';
import {DividerOverviewExample} from './componentes/divider-overview-example/divider-overview-example';
import {ExpansionOverviewExample} from './componentes/expansion-overview-example/expansion-overview-example';
import {FormFieldOverviewExample} from './componentes/form-field-overview-example/form-field-overview-example';
import {GridListOverviewExample} from './componentes/grid-list-overview-example/grid-list-overview-example';
import {IconOverviewExample} from './componentes/icon-overview-example/icon-overview-example';
import {InputOverviewExample} from './componentes/input-overview-example/input-overview-example';
import {ListOverviewExample} from './componentes/list-overview-example/list-overview-example';
import {MenuOverviewExample} from './componentes/menu-overview-example/menu-overview-example';
import {PaginatorOverviewExample} from './componentes/paginator-overview-example/paginator-overview-example';
import {ProgressBarDeterminateExample} from './componentes/progress-bar-determinate-example/progress-bar-determinate-example';
import {ProgressSpinnerOverviewExample} from './componentes/progress-spinner-overview-example/progress-spinner-overview-example';
import {RadioOverviewExample} from './componentes/radio-overview-example/radio-overview-example';
import {SelectErrorStateMatcherExample} from './componentes/select-error-state-matcher-example/select-error-state-matcher-example';
import {SidenavResponsiveExample} from './componentes/sidenav-responsive-example/sidenav-responsive-example';
import {SlideToggleOverviewExample} from './componentes/slide-toggle-overview-example/slide-toggle-overview-example';
import {SliderFormattingExample} from './componentes/slider-formatting-example/slider-formatting-example';
import {SnackBarOverviewExample} from './componentes/snack-bar-overview-example/snack-bar-overview-example';
import {SortOverviewExample} from './componentes/sort-overview-example/sort-overview-example';
import {StepperOverviewExample} from './componentes/stepper-overview-example/stepper-overview-example';
import {TableBasicExample} from './componentes/table-basic-example/table-basic-example';
import {TabGroupBasicExample} from './componentes/tab-group-basic-example/tab-group-basic-example';
import {ToolbarOverviewExample} from './componentes/toolbar-overview-example/toolbar-overview-example';
import {TooltipOverviewExample} from './componentes/tooltip-overview-example/tooltip-overview-example';
import {TreeFlatOverviewExample} from './componentes/tree-flat-overview-example/tree-flat-overview-example';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(AutocompleteSimpleExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(BadgeOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));


bootstrapApplication(BottomSheetOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(ButtonOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(ButtonToggleOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(CardOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(CheckboxOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(ChipsOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(DatepickerOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));


bootstrapApplication(DialogOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(DividerOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(ExpansionOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(FormFieldOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(GridListOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(IconOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(InputOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(ListOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(MenuOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(PaginatorOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(ProgressBarDeterminateExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(ProgressSpinnerOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(RadioOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(SelectErrorStateMatcherExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(SidenavResponsiveExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(SlideToggleOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(SliderFormattingExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(SnackBarOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(SortOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(StepperOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(TableBasicExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(TabGroupBasicExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(ToolbarOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(TooltipOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));

bootstrapApplication(TreeFlatOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));
