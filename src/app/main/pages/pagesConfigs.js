/**
 * Second Party
 */
import { ClassicSearchPageConfig } from "./search/classic/ClassicSearchPageConfig";
import { ComingSoonPageConfig } from "./coming-soon/ComingSoonPageConfig";
import { CompactInvoicePageConfig } from "./invoices/compact/CompactInvoicePageConfig";
import { FaqPageConfig } from "./faq/FaqPageConfig";
import { ForgotPasswordPageConfig } from "./landing/auth/forgot-password/ForgotPasswordPageConfig";
import { ForgotPassword2PageConfig } from "./landing/auth/forgot-password-2/ForgotPassword2PageConfig";
import { Error404PageConfig } from "./errors/404/Error404PageConfig";
import { Error500PageConfig } from "./errors/500/Error500PageConfig";
import { KnowledgeBasePageConfig } from "./knowledge-base/KnowledgeBaseConfig";
import { LockPageConfig } from "./landing/auth/lock/LockPageConfig";
import { LoginPageConfig } from "./landing/auth/login/LoginPageConfig";
import { Login2PageConfig } from "./landing/auth/login-2/Login2PageConfig";
import { MailConfirmPageConfig } from "./landing/auth/mail-confirm/MailConfirmPageConfig";
import { MaintenancePageConfig } from "./maintenance/MaintenancePageConfig";
import { ModernInvoicePageConfig } from "./invoices/modern/ModernInvoicePageConfig";
import { ModernSearchPageConfig } from "./search/modern/ModernSearchPageConfig";
import { PricingPageConfig } from "./electr/sales-and-marketing/PricingPageConfig";
import { ProfilePageConfig } from "./profile/ProfilePageConfig";
import { RegisterPageConfig } from "./landing/auth/register/RegisterPageConfig";
import { Register2PageConfig } from "./landing/auth/register-2/Register2PageConfig";
import { ResetPasswordPageConfig } from "./landing/auth/reset-password/ResetPasswordPageConfig";
import { ResetPassword2PageConfig } from "./landing/auth/reset-password-2/ResetPassword2PageConfig";
/**
 * First Party
 */
import { DonatePageConfig } from "./landing/donate/DonatePageConfig";

export const pagesConfigs = [
  /**
   * Second Party
   */
  ClassicSearchPageConfig,
  ComingSoonPageConfig,
  CompactInvoicePageConfig,
  Error500PageConfig,
  Error404PageConfig,
  FaqPageConfig,
  ForgotPasswordPageConfig,
  ForgotPassword2PageConfig,
  KnowledgeBasePageConfig,
  LockPageConfig,
  LoginPageConfig,
  Login2PageConfig,
  MailConfirmPageConfig,
  MaintenancePageConfig,
  ModernInvoicePageConfig,
  ModernSearchPageConfig,
  PricingPageConfig,
  ProfilePageConfig,
  RegisterPageConfig,
  ResetPasswordPageConfig,
  Register2PageConfig,
  ResetPassword2PageConfig,
  /**
   * First Party
   */
  DonatePageConfig
];
