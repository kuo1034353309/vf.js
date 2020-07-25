export class FontLoaderPlug {

    static use(resource: vf.LoaderResource, next: any): void {
        let resourceInfo;

        switch (resource.extension) {
            case 'ttf':
                resourceInfo = resource.data;
                break;
            case 'woff':
            case 'woff2':
                resourceInfo = `url(${resource.url})`;
                break;
            default:
                next();

                return;
        }

        const win = window as any;

        if (win.FontFace) {
            new win.FontFace(resource.name, resourceInfo, {
                style: 'normal',
            }).load().then((n: any) => {
                (document as any).fonts.add(n);
                next();

                return;
            }).catch((t: any) => {
                console.error(`addFont failed. Maybe the font you are trying to load is too big?\n${t}`);
                next(t);

                return;
            });
        }

    }
}