import { bootstrapApplication } from '@angular/platform-browser';
import { NumberParentComponent } from './app/components/number-parent/number-parent.component';

bootstrapApplication(NumberParentComponent)
  .catch(err => console.error(err));
