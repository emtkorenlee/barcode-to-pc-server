import { StringComponentModel } from "./string-component.model";

export class SettingsModel {
    enableRealtimeStrokes: boolean = true;
    enableOpenInBrowser: boolean = false;
    typedString: StringComponentModel[] = [
        { name: 'BARCODE', value: 'barcode', type: 'barcode' },
        { name: 'ENTER', value: 'enter', type: 'key' }
    ];
    newLineCharacter: string = null;
    enableQuotes: boolean = true;
}