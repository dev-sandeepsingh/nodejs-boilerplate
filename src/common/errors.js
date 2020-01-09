class AppError extends Error {
  constructor({ details = {}, message } = {}) {
    super(message || details.message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.details = details;
  }
}

class AlreadyAppliedForJobError extends AppError {}
class JobNotFoundError extends AppError {}
class JobExpiredError extends AppError {}
class JobApplicationNotFoundError extends AppError {}
class JobApplicationAlreadyAcceptedByHcError extends AppError {}
class JobApplicationAlreadyRejectedByHcError extends AppError {}
class DriverMissingRequiredLicenceError extends AppError {}
class LicenceNotValidForJobError extends AppError {}
class LicenceExpiredError extends AppError {}
class JobAlreadyStartedError extends AppError {}
class JobNotAcceptedByDriverError extends AppError {}
class JobApplicationNotAcceptedByHcError extends AppError {}
class JobApplicationAlreadyAcceptedByDriverError extends AppError {}
class JobApplicationAlreadyRemovedError extends AppError {}
class FcmError extends AppError {}
class AllSlotsAlreadyAllocatedError extends AppError {}
class JobAlreadyEndedError extends AppError {}
class JobNotStartedError extends AppError {}
class JobSlotNotFoundError extends AppError {}
class EmailNotExistsError extends AppError {}
class DriverAlreadyInvitedByHcError extends AppError {}
class DriverAlreadyPermanentError extends AppError {}
class DriverNotFoundError extends AppError {}
class DriversNotMoreThanRequiredDriversError extends AppError {}
class InvitationNotFoundError extends AppError {}
class InvitationAlreadyAcceptedError extends AppError {}
class NotificationNotFoundError extends AppError {}
class InvitationAlreadyRejectedError extends AppError {}
class CriteriaNotFoundError extends AppError {}
class UniqueCriteriaPerDriverConstraintError extends AppError {}
class LicenceNotFoundError extends AppError {}
class VehicleCriteriaRequiredError extends AppError {}
class JobSlotNotAssignedError extends AppError {}
class PhoneAlreadyExistsError extends AppError {}
class JobSlotAlreadyCancelledError extends AppError {}
class HiringCompanyNotFoundError extends AppError {}
class OnboardingAlreadyStartedError extends AppError {}
class TermsAndConditionsNotAcceptedError extends AppError {}
class DrivingLicenceNotFoundError extends AppError {}
class DrivingInvoiceDetailsNotFoundError extends AppError {}
class CompareStartDatetimeAndEndDatetimeError extends AppError {}
class InvalidDatetimeError extends AppError {}
class TimesheetAlreadyApprovedError extends AppError {}
class JobNotEndedError extends AppError {}
class TimesheetAdjustmentLimitError extends AppError {}
class TimesheetBreakTimeIsGreaterThanJobCompletedTimeError extends AppError {}
class AvailableFromAndAvailableUntilLengthNotEqualError extends AppError {}
class DriverNotAllowedToControlShiftError extends AppError {}
class DriverAlreadyHaveInProgressJobError extends AppError {}
class DriversNotLessThanRequiredDriversError extends AppError {}
class DriverBannedByHcError extends AppError {}
class AllDriversTrampingJobsNotAllowedError extends AppError {}
class DriversNotMoreThanOneError extends AppError {}
class JobAlreadyNoShowError extends AppError {}
class AssessmentJobNotTrampingJobError extends AppError {}
class ApproveTimesheetNotAllowedForAssessmentJobError extends AppError {}
class RateCardEmptyError extends AppError {}
class JobLatitudeLongitudeError extends AppError {}
class ClashJobError extends AppError {}
class JobTypeNotFoundError extends AppError {}
class DriverHaveDataInJobSlotOrJobApplicationError extends AppError {}
class FailedToCopyFileError extends AppError {}
class FailedToDeleteFileError extends AppError {}
class FailedToGetFilesError extends AppError {}
class JobTemplateNotFoundError extends AppError {}
class InvalidInputError extends AppError {}
class InvalidTimezoneError extends AppError {}
class AdjustmentLimitCrossedError extends AppError {}
class UnableToCheckBankHolidayError extends AppError {}
class OnboardingNotCompletedError extends AppError {}
class MissingCompanyTypeRatesError extends AppError {}
class MissingCompanyTypeOfferError extends AppError {}
class WeekNotApprovableError extends AppError {}
class MissingPoNumberError extends AppError {}
class MissingTotalError extends AppError {}
class MissingUserError extends AppError {}
class CanNotStartJobInApprovedWeekError extends AppError {}
class SiteNameAlreadyExistsError extends AppError {}
class MaximumSitesQuotaExceededError extends AppError {}
class SiteNotFoundError extends AppError {}
class WeeklyTimesheetAlreadyApprovedError extends AppError {}
class JobSlotNotEndedError extends AppError {}
class NotAllExpensesReviewedError extends AppError {}
class HiringCompanyUserAlreadyActiveError extends AppError {}
class UserPasswordNotSetError extends AppError {}
class HiringCompanyUserNotActiveError extends AppError {}
class HiringCompanyUserNotFoundError extends AppError {}

module.exports = {
  AppError,
  AlreadyAppliedForJobError,
  JobNotFoundError,
  JobExpiredError,
  DriverMissingRequiredLicenceError,
  LicenceNotValidForJobError,
  JobApplicationNotFoundError,
  JobApplicationAlreadyAcceptedByHcError,
  JobApplicationAlreadyRejectedByHcError,
  JobApplicationAlreadyAcceptedByDriverError,
  JobApplicationNotAcceptedByHcError,
  LicenceExpiredError,
  JobAlreadyStartedError,
  JobNotAcceptedByDriverError,
  FcmError,
  JobAlreadyEndedError,
  JobNotStartedError,
  AllSlotsAlreadyAllocatedError,
  JobSlotNotFoundError,
  EmailNotExistsError,
  DriverAlreadyInvitedByHcError,
  DriverAlreadyPermanentError,
  DriverNotFoundError,
  DriversNotMoreThanRequiredDriversError,
  InvitationNotFoundError,
  InvitationAlreadyAcceptedError,
  NotificationNotFoundError,
  InvitationAlreadyRejectedError,
  CriteriaNotFoundError,
  UniqueCriteriaPerDriverConstraintError,
  LicenceNotFoundError,
  VehicleCriteriaRequiredError,
  JobSlotNotAssignedError,
  PhoneAlreadyExistsError,
  JobSlotAlreadyCancelledError,
  HiringCompanyNotFoundError,
  JobApplicationAlreadyRemovedError,
  OnboardingAlreadyStartedError,
  TermsAndConditionsNotAcceptedError,
  DrivingLicenceNotFoundError,
  DrivingInvoiceDetailsNotFoundError,
  CompareStartDatetimeAndEndDatetimeError,
  InvalidDatetimeError,
  TimesheetAlreadyApprovedError,
  JobNotEndedError,
  TimesheetAdjustmentLimitError,
  TimesheetBreakTimeIsGreaterThanJobCompletedTimeError,
  AvailableFromAndAvailableUntilLengthNotEqualError,
  DriverNotAllowedToControlShiftError,
  DriverAlreadyHaveInProgressJobError,
  DriversNotLessThanRequiredDriversError,
  DriverBannedByHcError,
  AllDriversTrampingJobsNotAllowedError,
  DriversNotMoreThanOneError,
  JobAlreadyNoShowError,
  AssessmentJobNotTrampingJobError,
  ApproveTimesheetNotAllowedForAssessmentJobError,
  RateCardEmptyError,
  JobLatitudeLongitudeError,
  ClashJobError,
  JobTypeNotFoundError,
  DriverHaveDataInJobSlotOrJobApplicationError,
  FailedToCopyFileError,
  FailedToDeleteFileError,
  FailedToGetFilesError,
  JobTemplateNotFoundError,
  InvalidInputError,
  InvalidTimezoneError,
  AdjustmentLimitCrossedError,
  UnableToCheckBankHolidayError,
  OnboardingNotCompletedError,
  MissingCompanyTypeRatesError,
  MissingCompanyTypeOfferError,
  WeekNotApprovableError,
  MissingPoNumberError,
  CanNotStartJobInApprovedWeekError,
  SiteNameAlreadyExistsError,
  MaximumSitesQuotaExceededError,
  SiteNotFoundError,
  WeeklyTimesheetAlreadyApprovedError,
  JobSlotNotEndedError,
  NotAllExpensesReviewedError,
  MissingTotalError,
  MissingUserError,
  HiringCompanyUserAlreadyActiveError,
  UserPasswordNotSetError,
  HiringCompanyUserNotActiveError,
  HiringCompanyUserNotFoundError,
};
