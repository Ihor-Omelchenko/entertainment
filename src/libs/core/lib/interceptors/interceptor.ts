import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  if (req.url.startsWith(environment.apiUrl)) {
    const cloned = req.clone({
      setHeaders: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiToken}`
      }
    });

    return next(cloned);
  }

  return next(req);
}
