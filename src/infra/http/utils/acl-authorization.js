const Acl = require('acl');
const AclMemoryRegexpBackend = require('acl-mem-regexp');
const { AppError } = require('../../../common/errors');

const acl = new Acl(new AclMemoryRegexpBackend()); // eslint-disable-line
const rolesResources = [
  {
    roles: [ROLES.admin],
    allows: [
      {
        resources: '/hiringCompanies',
        permissions: ['get', 'post'],
      },
      {
        resources: '/drivers/[0-9]+/profilePhoto/.*',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/licenceFrontPhoto/.*',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/licenceBackPhoto/.*',
        permissions: ['get'],
      },
      {
        resources: '/drivers',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+',
        permissions: ['get'],
      },
      {
        resources: '/jobs/specialInstructions/.*/.*.pdf',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/[0-9]+',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+',
        permissions: ['patch'],
      },
      {
        resources: '/jobs/clarityDriverTimesheets.csv',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/clearInvoiceDetails',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+',
        permissions: ['delete'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/drivers/[0-9]+',
        permissions: ['patch'],
      },
      {
        resources: '/hiringCompanies/setHcDriverGroup',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/jobs/approved',
        permissions: ['get'],
      },
      {
        resources: '/jobs/slots/[0-9]+/actions/approveTimesheet',
        permissions: ['post'],
      },
      {
        resources:
          '/timesheets/weeks/[0-9]{4}-[0-9]{2}-[0-9]{2}/hiringCompanies',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/users',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/users',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/users/.+/actions/activate',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/users/.+/actions/deactivate',
        permissions: ['post'],
      },
    ],
  },
  {
    roles: [ROLES.hiringCompany],
    allows: [
      {
        resources: '/hiringCompanies/jobs',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/jobTemplate',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/jobTemplates',
        permissions: ['get'],
      },
      {
        resources: '/jobs/specialInstructionsPostData',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/jobSchedule',
        permissions: ['get'],
      },
      {
        resources: '/jobs/specialInstructions/.*/.*.pdf',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/jobTemplates/[0-9]+/details',
        permissions: ['get'],
      },
      {
        resources: '/jobs/[0-9]+/applications/review',
        permissions: ['get'],
      },
      {
        resources: '/jobs/applications/[0-9]+/actions/accept',
        permissions: ['post'],
      },
      {
        resources: '/jobs/applications/[0-9]+/actions/reject',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+/profilePhoto/.*',
        permissions: ['get'],
      },
      {
        resources: '/jobs/applications/[0-9]+',
        permissions: ['get'],
      },
      {
        resources: '/jobs/slots/[0-9]+/actions/start',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/jobs/review',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/[0-9]+',
        permissions: ['patch'],
      },
      {
        resources: '/jobs/slots/[0-9]+/actions/end',
        permissions: ['post'],
      },
      {
        resources: '/jobs/slots/[0-9]+/actions/adjustTimeSheet',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/jobSlots/[0-9]+/details',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/drivers',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/actions/inviteDriverToPermanent',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/drivers/[0-9]+',
        permissions: ['patch'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/actions/cancelInvitation/[0-9]+',
        permissions: ['post'],
      },
      {
        resources: '/jobs/[0-9]+/details',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/slots/count',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/jobTemplates/[0-9]+',
        permissions: ['patch'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/jobs/upcoming',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/[0-9]+/slots/inprogress/count',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/licenceFrontPhoto/.*',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/licenceBackPhoto/.*',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+',
        permissions: ['get'],
      },
      {
        resources: '/notifications',
        permissions: ['get'],
      },
      {
        resources: '/sse',
        permissions: ['get'],
      },
      {
        resources: '/notifications/[0-9]+',
        permissions: ['patch'],
      },
      {
        resources: '/users/.*',
        permissions: ['patch'],
      },
      {
        resources: '/hiringCompanies/jobs/slots/[0-9]+/actions/cancel',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/[0-9]+',
        permissions: ['put'],
      },
      {
        resources: '/jobs/slots/[0-9]+/actions/approveTimesheet',
        permissions: ['post'],
      },
      {
        resources: '/jobs/slots/[0-9]+/actions/editStartTime',
        permissions: ['post'],
      },
      {
        resources: '/jobs/slots/[0-9]+/actions/noShow',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/jobTemplates/[0-9]+',
        permissions: ['delete'],
      },
      {
        resources: '/jobs/[0-9]+/activities',
        permissions: ['get'],
      },
      {
        resources:
          '/timesheets/weeks/[0-9]{4}-[0-9]{2}-[0-9]{2}/hiringCompanies/[0-9]+/breakdown',
        permissions: ['get'],
      },
      {
        resources:
          '/timesheets/weeks/[0-9]{4}-[0-9]{2}-[0-9]{2}/hiringCompanies/[0-9]+/summary',
        permissions: ['get'],
      },
      {
        resources:
          '/timesheets/weeks/[0-9]{4}-[0-9]{2}-[0-9]{2}/hiringCompanies/[0-9]+',
        permissions: ['get'],
      },
      {
        resources:
          '/timesheets/weeks/[0-9]{4}-[0-9]{2}-[0-9]{2}/hiringCompanies/[0-9]+/actions/approve',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/sites',
        permissions: ['post'],
      },
      {
        resources: '/hiringCompanies/sites/[0-9]+',
        permissions: ['patch'],
      },
      {
        resources: '/jobs/slots/[0-9]+/receipts/.*',
        permissions: ['get'],
      },
      {
        resources: '/hiringCompanies/users/.+/emailNotificationSettings',
        permissions: ['patch'],
      },
      {
        resources: '/hiringCompanies/users/.+/emailNotificationSettings',
        permissions: ['get'],
      },
      {
        resources:
          '/hiringCompanies/[0-9]+/jobSchedule/weekView/[0-9]{4}-[0-9]{2}-[0-9]{2}',
        permissions: ['get'],
      },
    ],
  },
  {
    roles: [ROLES.driver],
    allows: [
      {
        resources: '/drivers/[0-9]+/profilePhoto',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+/licenceFrontPhoto',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+/licenceBackPhoto',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+/rightToWork/[0-9]+',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+/profile',
        permissions: ['put'],
      },
      {
        resources: '/drivers/[0-9]+/invoiceDetails',
        permissions: ['put'],
      },
      {
        resources: '/drivers/[0-9]+/jobs/preference',
        permissions: ['get'],
      },
      {
        resources: '/jobs/[0-9]+/details',
        permissions: ['get'],
      },
      {
        resources: '/jobs/[0-9]+/actions/apply',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+/licence/date',
        permissions: ['put'],
      },
      {
        resources: '/jobs/specialInstructions/.*/.*.pdf',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/jobs/applications',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/jobScheduleCount',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/jobs/offers',
        permissions: ['get'],
      },
      {
        resources: '/drivers/jobs/applications/[0-9]+/actions/accept',
        permissions: ['post'],
      },
      {
        resources: '/drivers/jobs/applications/[0-9]+/actions/reject',
        permissions: ['post'],
      },
      {
        resources: '/drivers/jobs/applications/[0-9]+/actions/cancel',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+/jobs/upcoming',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/accountStats',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/profilePhoto/.*',
        permissions: ['get'],
      },
      {
        resources: '/drivers/[0-9]+/timesheets/recent',
        permissions: ['get'],
      },
      {
        resources: '/notifications',
        permissions: ['get'],
      },
      {
        resources: '/drivers/permanentInvitations/[0-9]+/actions/reject',
        permissions: ['post'],
      },
      {
        resources: '/drivers/permanentInvitations/[0-9]+/actions/accept',
        permissions: ['post'],
      },
      {
        resources: '/notifications/[0-9]+',
        permissions: ['delete'],
      },
      {
        resources: '/drivers/[0-9]+/criteria',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+/criteria',
        permissions: ['patch'],
      },
      {
        resources: '/drivers/[0-9]+/cancelledJobSlotCount/[0-9]+',
        permissions: ['get'],
      },
      {
        resources: '/jobs/slots/[0-9]+/actions/cancel',
        permissions: ['post'],
      },
      {
        resources: '/notifications/[0-9]+',
        permissions: ['patch'],
      },
      {
        resources: '/users/.*',
        permissions: ['patch'],
      },
      {
        resources: '/drivers/jobs/applications/[0-9]+/actions/remove',
        permissions: ['post'],
      },
      {
        resources: '/drivers/actions/acceptTermsOfService',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+/actions/startOnboarding',
        permissions: ['post'],
      },
      {
        resources: '/jobs/[0-9]+/termsAndConditions',
        permissions: ['get'],
      },
      {
        resources: '/jobs/slots/[0-9]+/actions/start',
        permissions: ['post'],
      },
      {
        resources: '/jobs/slots/[0-9]+/actions/end',
        permissions: ['post'],
      },
      {
        resources: '/drivers/[0-9]+/job/inProgress',
        permissions: ['get'],
      },
      {
        resources: '/drivers/startTimeChange/[0-9]+/actions/accept',
        permissions: ['post'],
      },
      {
        resources: '/drivers/startTimeChange/[0-9]+/actions/reject',
        permissions: ['post'],
      },
      {
        resources: '/jobs/slots/[0-9]+/receipts',
        permissions: ['post'],
      },
      {
        resources: '/jobs/slots/[0-9]+/receipts/.*',
        permissions: ['get'],
      },
      {
        resources: '/jobs/slots/[0-9]+/expenses',
        permissions: ['post'],
      },
    ],
  },
];
acl.allow(rolesResources);

class ForbiddenError extends AppError {}

const checkPermisssion = (role, resource, permission) =>
  new Promise((resolve, reject) => {
    acl.areAnyRolesAllowed(role, resource, permission, (err, isAllowed) => {
      if (err) {
        const error = new ForbiddenError({
          details: err,
        });
        reject(error);
        return;
      }
      resolve(isAllowed);
    });
  });

module.exports = { checkPermisssion };
