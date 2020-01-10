const { AppError } = require('../../../common/errors');

const toApiResponse = fn => async (req, res, next) => {
  try {
    const { status, data, meta = null } = await fn(req, res);
    res.status(status).send({
      success: true,
      status,
      data,
      meta,
    });
  } catch (error) {
    next(error);
  }
};

const errorCodes = {
  notFoundErrorCode: 'notFoundError',
  badRequestErrorCode: 'badRequestError',
  internalServerErrorCode: 'internalServerError',
  validationErrorCode: 'validationError',
  userNotFoundErrorCode: 'userNotFoundError',
  invalidResetTokenErrorCode: 'invalidResetTokenError',
  unauthorizedErrorCode: 'unauthorizedError',
  phoneVerificationErrorCode: 'phoneVerificationError',
  resetPasswordEmailErrorCode: 'resetPasswordEmailError',
  emailAlreadyExistsErrorCode: 'emailAlreadyExistsError',
  forbiddenErrorCode: 'forbiddenError',
  companyNameAlreadyExistsErrorCode: 'companyNameAlreadyExistsError',
  licenceNotFoundErrorCode: 'licenceNotFoundError',
  rightToWorkTypeNotFoundErrorCode: 'rightToWorkTypeNotFoundError',
  hcCreatePasswordEmailErrorCode: 'hcCreatePasswordEmailError',
  invalidEmailErrorCode: 'invalidEmailError',
  jobExpiredErrorCode: 'jobExpiredError',
  alreadyAppliedForJobErrorCode: 'alreadyAppliedForJobError',
  failedToSubcribeToMailingListErrorCode:
    'failedToSubcribeToMailingListErrorCode',
  googleRecaptchaVerificationFailedErrorCode:
    'googleRecaptchaVerificationFailedErrorCode',
  jobApplicationAlreadyAcceptedByHcErrorCode:
    'jobApplicationAlreadyAcceptedByHcErrorCode',
  jobApplicationAlreadyRejectedByHcErrorCode:
    'jobApplicationAlreadyRejectedByHcErrorCode',
  licenceExpiredErrorCode: 'licenceExpiredError',
  jobAlreadyStartedErrorCode: 'jobAlreadyStartedErrorCode',
  jobNotAcceptedByDriverErrorCode: 'jobNotAcceptedByDriverErrorCode',
  jobApplicationNotFoundErrorCode: 'jobApplicationNotFoundErrorCode',
  jobApplicationNotAcceptedByHcErrorCode:
    'jobApplicationNotAcceptedByHcErrorCode',
  jobApplicationAlreadyAcceptedByDriverErrorCode:
    'jobApplicationAlreadyAcceptedByDriverErrorCode',
  jobAlreadyEndedErrorCode: 'jobAlreadyEndedErrorCode',
  jobNotStartedByCode: 'jobNotStartedErrorCode',
  allSlotsAlreadyAllocatedErrorCode: 'allSlotsAlreadyAllocatedErrorCode',
  emailNotExistsErrorCode: 'emailNotExistsErrorCode',
  driverAlreadyInvitedByHcErrorCode: 'driverAlreadyInvitedByHcErrorCode',
  driverNotFoundErrorCode: 'driverNotFoundErrorCode',
  tooManyRequestsErrorCode: 'tooManyRequestsErrorCode',
  driversNotMoreThanRequiredDriversErrorCode:
    'driverNotMoreThanRequiredDriversErrorCode',
  invitationNotFoundErrorCode: 'invitationNotFoundErrorCode',
  invitationAlreadyAcceptedErrorCode: 'invitationAlreadyAcceptedErrorCode',
  notificationNotFoundErrorCode: 'notificationNotFoundErrorCode',
  invitationAlreadyRejectedErrorCode: 'invitationAlreadyRejectedErrorCode',
  driverAlreadyPermanentErrorCode: 'driverAlreadyPermanentErrorCode',
  criteriaNotFoundErrorCode: 'criteriaNotFoundErrorCode',
  duplicateCriteriaValueErrorCode: 'duplicateCriteriaValueErrorCode',
  vehicleCriteriaRequiredErrorCode: 'vehicleCriteriaRequiredErrorCode',
  jobSlotNotAssignedErrorCode: 'jobSlotNotAssignedErrorCode',
  phoneAlreadyExistsErrorCode: 'phoneAlreadyExistsError',
  jobSlotAlreadyCancelledErrorCode: 'jobSlotAlreadyCancelledErrorCode',
  hiringCompanyNotFoundErrorCode: 'hiringCompanyNotFoundErrorCode',
  jobApplicationAlreadyRemovedErrorCode:
    'jobApplicationAlreadyRemovedErrorCode',
  onboardingAlreadyStartedErrorCode: 'onboardingAlreadyStartedErrorCode',
  allDriversJobsNotAllowedErrorCode: 'allDriversJobsNotAllowedErrorCode',
  clarityOnboardingEmailErrorrCode: 'clarityOnboardingEmailErrorrCode',
  termsAndConditionsNotAcceptedErrorCode:
    'termsAndConditionsNotAcceptedErrorCode',
  drivingLicenceNotFoundErrorCode: 'drivingLicenceNotFoundErrorCode',
  drivingInvoiceDetailsNotFoundErrorCode:
    'drivingInvoiceDetailsNotFoundErrorCode',
  compareStartDatetimeAndEndDatetimeErrorCode:
    'compareStartDatetimeAndEndDatetimeErrorCode',
  invalidDatetimeErrorCode: 'invalidDatetimeErrorCode',
  onboardingStatusAlreadyCompletedErrorCode:
    'onboardingStatusAlreadyCompletedErrorCode',
  onboardingStatusAlreadyPendingErrorCode:
    'onboardingStatusAlreadyPendingErrorCode',
  jobNotEndedErrorCode: 'jobNotEndedErrorCode',
  timesheetAlreadyApprovedErrorCode: 'timesheetAlreadyApprovedErrorCode',
  timesheetAdjustmentLimitErrorCode: 'timesheetAdjustmentLimitErrorCode',
  timesheetBreakTimeIsGreaterThanJobCompletedTimeErrorCode:
    'timesheetBreakTimeIsGreaterThanJobCompletedTimeErrorCode',
  availableFromAndAvailableUntilLengthNotEqualErrorCode:
    'availableFromAndAvailableUntilLengthNotEqualErrorCode',
  driverNotAllowedToControlShiftErrorCode:
    'driverNotAllowedToControlShiftErrorCode',
  driverAlreadyHaveInProgressJobErrorCode:
    'driverAlreadyHaveInProgressJobErrorCode',
  driversNotLessThanRequiredDriversErrorCode:
    'driversNotLessThanRequiredDriversErrorCode',
  driverBannedByHcErrorCode: 'driverBannedByHcErrorCode',
  allDriversTrampingJobsNotAllowedErrorCode:
    'allDriversTrampingJobsNotAllowedErrorCode',
  driversNotMoreThanOneErrorCode: 'driversNotMoreThanOneErrorCode',
  jobAlreadyNoShowErrorCode: 'jobAlreadyNoShowErrorCode',
  assessmentJobNotTrampingJobErrorCode: 'assessmentJobNotTrampingJobErrorCode',
  approveTimesheetNotAllowedForAssessmentJobErrorCode:
    'approveTimesheetNotAllowedForAssessmentJobErrorCode',
  jobLatitudeLongitudeErrorCode: 'jobLatitudeLongitudeErrorCode',
  clashJobErrorCode: 'clashJobErrorCode',
  JobTypeNotFoundErrorCode: 'JobTypeNotFoundErrorCode',
  driverHaveDataInJobSlotOrJobApplicationErrorCode:
    'driverHaveDataInJobSlotOrJobApplicationErrorCode',
  jobTemplateNotFoundErrorCode: 'jobTemplateNotFoundErrorCode',
  invalidTimezoneErrorCode: 'invalidTimezoneErrorCode',
  adjustmentLimitCrossedErrorCode: 'adjustmentLimitCrossedErrorCode',
  unableToCheckBankHolidayErrorCode: 'unableToCheckBankHolidayErrorCode',
  onboardingNotCompletedErrorCode: 'onboardingNotCompletedErrorCode',
  missingCompanyTypeRatesErrorCode: 'missingCompanyTypeRatesErrorCode',
  missingCompanyTypeOfferErrorCode: 'missingCompanyTypeOfferErrorCode',
  canNotStartJobInApprovedWeekErrorCode:
    'canNotStartJobInApprovedWeekErrorCode',
  siteNameAlreadyExistsErrorCode: 'siteNameAlreadyExistsErrorCode',
  maximumSitesQuotaExceededErrorCode: 'maximumSitesQuotaExceededErrorCode',
  siteNotFoundErrorCode: 'siteNotFoundErrorCode',
  weeklyTimesheetAlreadyApprovedErrorCode:
    'weeklyTimesheetAlreadyApprovedErrorCode',
  jobSlotNotEndedErrorCode: 'jobSlotNotEndedErrorCode',
  notAllExpensesReviewedErrorCode: 'notAllExpensesReviewedErrorCode',
  canNotUpdateDetailsAfterOnboardingProcessErrorCode:
    'canNotUpdateDetailsAfterOnboardingProcessErrorCode',
  userPasswordNotSetErrorCode: 'userPasswordNotSetErrorCode',
  hiringCompanyUserAlreadyActiveErrorCode:
    'hiringCompanyUserAlreadyActiveErrorCode',
  hiringCompanyUserNotActiveErrorCode: 'hiringCompanyUserNotActiveErrorCode',
};
const errors = {
  [errorCodes.badRequestErrorCode]: {
    status: 400,
    message: 'Bad request',
  },
  [errorCodes.notFoundErrorCode]: {
    status: 404,
    message: 'Resource not found',
  },
  [errorCodes.internalServerErrorCode]: {
    status: 500,
    message: 'Internal server error',
  },
  [errorCodes.validationErrorCode]: {
    status: 422,
    message: 'Validation error',
  },
  [errorCodes.unauthorizedErrorCode]: {
    status: 401,
    message: 'Unauthorized',
  },
  [errorCodes.forbiddenErrorCode]: {
    status: 403,
    message: 'Not allowed to access the resource',
  },
  [errorCodes.tooManyRequestsErrorCode]: {
    status: 429,
    message: 'Too many requests in this timeframe',
  },
};

class ApiError extends AppError {
  constructor({ code, message, status, details }) {
    super({ details });
    this.code = code;
    this.message = message || errors[code].message;
    this.status = status || errors[code].status;
  }
}

module.exports = { toApiResponse, ApiError, errorCodes };
