const mockMails = [
    {
        subject: 'My first email',
        receiver: 'test1@test.io',
        content: 'hello w 1'
    },
    {
        subject: 'My second email',
        receiver: 'test2@test.io',
        content: 'hello w 2'
    },
    {
        subject: 'My third email',
        receiver: 'test3@test.io',
        content: 'hello w 3'
    }
];

module.exports = {
    Query: {
        mails: () => mockMails,
        mail: (_, args) => mockMails[0]
    },
    Mutation: {
        mail: (_, args) => {
            mockMails[0] = args;

            return args;
        }
    }
};