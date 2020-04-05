/**
 * Authorization Roles
 */
const authRoles = {
  admin: ["admin"],
  staff: ["admin", "staff"],
  user: ["admin", "staff", "electr", "electee"],
  electr: ["admin", "staff", "electr"],
  electee: ["admin", "staff", "electee"],
  /**
   * @todo Additional Roles
   * @example [electr_admin,electr_manager, electr_staff]
   * @example [electee_group_admin,electee_group_manager, electee_group_staff]
   */
  onlyGuest: ["admin", "staff", "guest"],
};

export default authRoles;
