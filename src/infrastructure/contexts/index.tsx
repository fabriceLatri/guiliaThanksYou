import React, {createContext, useContext} from 'react';
import {AuthService} from '@domain/services/auth/authService';
import {authFirebaseRepository} from '@infrastructure/repositories/auth/firebase/authRepository';
import type {RootService} from '@infrastructure/contexts/types';

export const createRootService = (): RootService => ({
  authService: new AuthService(new authFirebaseRepository()),
});

const ServicesContext = createContext<RootService | null>(null);

export const useServices = () => {
  const services = useContext(ServicesContext);

  if (!services) {
    throw new Error('A RootService value must be provided');
  }

  return services;
};

export const ServicesProvider = ServicesContext.Provider;
