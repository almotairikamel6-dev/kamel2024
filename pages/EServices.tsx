
import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const EServices = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('login');

  const renderForm = () => {
    switch (activeTab) {
      case 'register':
        return (
          <form className="space-y-4">
            <Input id="register-id" label={t('nationalId')} type="text" />
            <Input id="register-mobile" label={t('mobile')} type="tel" />
            <Input id="register-username" label={t('username')} type="text" />
            <Input id="register-email" label={t('email')} type="email" />
            <Input id="register-password" label={t('password')} type="password" />
            <Input id="register-captcha" label={t('visualCaptcha')} type="text" />
            <div className="flex items-center">
              <input id="agree" name="agree" type="checkbox" className="h-4 w-4 text-palm-green focus:ring-heritage-gold border-gray-300 rounded" />
              <label htmlFor="agree" className="ms-2 block text-sm text-gray-900">{t('agreeTerms')}</label>
            </div>
            <Button type="submit" className="w-full">{t('newUser')}</Button>
          </form>
        );
      case 'reset':
        return (
          <form className="space-y-4">
            <Input id="reset-id" label={t('nationalId')} type="text" />
            <Input id="reset-mobile" label={t('mobile')} type="tel" />
            <Input id="reset-captcha" label={t('visualCaptcha')} type="text" />
            <Button type="submit" className="w-full">{t('passwordReset')}</Button>
          </form>
        );
      case 'login':
      default:
        return (
          <form className="space-y-4">
            <Input id="login-username" label={t('username')} type="text" />
            <Input id="login-password" label={t('password')} type="password" />
            <Input id="login-captcha" label={t('visualCaptcha')} type="text" />
            <Button type="submit" className="w-full">{t('login')}</Button>
            <div className="text-center">
              <button type="button" onClick={() => setActiveTab('reset')} className="text-sm text-palm-green hover:underline">
                {t('forgotPassword')}
              </button>
            </div>
          </form>
        );
    }
  };

  const TabButton: React.FC<{ tabName: string; label: string }> = ({ tabName, label }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`px-4 py-2 font-semibold flex-1 transition-colors duration-200 rounded-t-md ${
        activeTab === tabName ? 'bg-pure-white text-palm-green border-b-2 border-heritage-gold' : 'bg-light-gray text-gray-500'
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <SectionTitle>{t('eServices')}</SectionTitle>
      <div className="max-w-md mx-auto">
        <div className="flex border-b border-gray-200">
          <TabButton tabName="login" label={t('login')} />
          <TabButton tabName="register" label={t('newUser')} />
        </div>
        <Card className="p-8 rounded-t-none">
          {renderForm()}
        </Card>
      </div>
    </>
  );
};

export default EServices;
