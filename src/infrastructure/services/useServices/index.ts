import { createContext, useContext } from 'react';
import { AuthService, PictureService } from '@domain/services';
import { ServicesType } from '@infrastructure/services/types';

import { authFirebaseRepository } from '@infrastructure/repositories/auth/firebase/authRepository';
import { PictureRepository } from '@infrastructure/repositories/picture/firestore/pictureRepository';

export const createServices = (): ServicesType => ({
  authService: new AuthService(new authFirebaseRepository()),
  pictureService: new PictureService(new PictureRepository()),
});

const ServicesContext = createContext<ServicesType | undefined>(undefined);

export const useServices = (): ServicesType => {
  const services = useContext(ServicesContext);

  if (!services) throw new Error('useServices Hook Error: no ServiceType value provided!');

  return services;
};

export const ServicesProvider = ServicesContext.Provider;
