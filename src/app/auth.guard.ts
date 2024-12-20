import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginViewmodelService } from './viewmodels/login-viewmodel.service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const loginViewModel = inject(LoginViewmodelService)
  const router = inject(Router)
  /*
  loginViewModel.loginState$.pipe(
    map((isLoggendIn) =>{
      if(!isLoggendIn){
        router.navigate(["login"],{queryParams:{blockedPage:state.url}})
        return false
      }
      return true
    })
  )
    */
  return true;
};
