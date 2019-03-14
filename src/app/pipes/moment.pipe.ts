import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
    name: 'moment'
})
export class MomentPipe implements PipeTransform {

    public transform(value: string, dateFormat: string, isRelative: boolean): string {

        // 2019-03-14T14:05:35.8188267+00:00

        // Creo la moment date
        const momentDate = moment(value);

        // Se ho il valore relativo
        if (isRelative){
            return momentDate.fromNow();
        }

        // Se NON ho una formattazione
        if (!dateFormat) {

            // Applico un valore di default
            dateFormat = 'YYYY-MM-DD';
        }

        return momentDate.format(dateFormat);
    }

}
