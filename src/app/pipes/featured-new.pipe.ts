import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featuredNew'
})
export class FeaturedNewPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
