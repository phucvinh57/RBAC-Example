INSERT INTO
    `role`(id, `name`)
VALUES
    (1, 'hr'),
    (2, 'marketing'),
    (3, 'finance');

INSERT INTO
    `user`(`name`, role_id)
VALUES
    ('Bob', 1),
    ('Alex', 2),
    ('William', 3);

INSERT INTO
    `resource`(id, `name`)
VALUES
    (1, 'HubSpot'),
    (2, 'Google Analytics'),
    (3, 'Facebook Ads'),
    (4, 'Google Ads'),
    (5, 'Xero'),
    (6, 'ADP'),
    (7, 'Lever'),
    (8, 'BambooHR');

INSERT INTO
    `action`(id, `name`)
VALUES
    (1, 'access'),
    (2, 'sudo');

INSERT INTO
    permission(role_id, action_id, resource_id)
VALUES
    -- marketing resources access
    (2, 1, 1),
    (2, 1, 2),
    (2, 1, 3),
    (2, 1, 4),
    -- finance access
    (3, 1, 5),
    (3, 1, 6),
    -- human resources access
    (1, 1, 7),
    (1, 1, 8);

SELECT
    user.name AS user_name,
    role_name,
    resource_name,
    action_name
FROM
    user
    JOIN (
        SELECT
            role.name AS role_name,
            role.id AS role_id,
            resource.name AS resource_name,
            action.name AS action_name
        FROM
            permission
            JOIN role ON role.id = permission.role_id
            JOIN resource ON resource.id = permission.resource_id
            JOIN action ON action.id = permission.action_id
    ) AS rbac ON user.role_id = rbac.role_id
WHERE
    user.id = 2;