import sharedData from "./data";

const transform = function transform(data) {
    return {
        page: {
            title: data.page_title,
            description: data.page_description,
        },

        navigation: {
            logo_text: data.nav_logo_text,
            items: [
                ["#live", data.nav_item_live],
                ["#story", data.nav_item_story],
                ["#wedding", data.nav_item_wedding],
                ["#gallery", data.nav_item_gallery],
                ["#send-gift", data.nav_item_gift],
                ["#messages", data.nav_item_message],
                ["#rsvp", data.nav_item_rsvp],
                ["#location", data.nav_item_location],
                ["#teaser", data.nav_item_teaser],
            ],
        },

        navigation_mobile: {
            items: [
                ["#story", data.nav_item_mobile_story],
                ["#wedding", data.nav_item_mobile_wedding],
                ["#gallery", data.nav_item_mobile_gallery],
                ["#send-gift", data.nav_item_mobile_gift],
                ["#messages", data.nav_item_mobile_message],
                ["#rsvp", data.nav_item_mobile_rsvp],
            ]
        },

        header: {
            title: data.head_title,
            subtitle: data.head_subtitle,
            date: data.head_date,
            rsvp: data.nav_item_rsvp,
            greeting: data.head_greetings,
            addToCalendarLabel: data.head_add_to_calendar_label,
        },

        save_the_date: {
            title: data.date_title,
            subtitle: data.date_subtitle,
            liveStreamText: data.date_live_stream_text,
            body: data.date_body,
            body_after: data.date_body_after,
            countdown: {
                day: data.date_countdown_day,
                hour: data.date_countdown_hour,
                minute: data.date_countdown_minute,
                second: data.date_countdown_second,
            },
        },

        story: {
            title: data.story_title,
            subtitle: data.story_subtitle,
            top_title: data.story_top_title,
            top_body: data.story_top_body,
            bottom_title: data.story_bottom_title,
            bottom_body: data.story_bottom_body,
            timeline: data.story_timeline,
        },

        events: {
            title: data.event_title,

            akad: {
                event: data.event_akad_name,
                time: data.event_akad_time,
                place: data.event_akad_place,
                address: data.event_akad_address,
                address_2: data.event_akad_address_2,
                city: data.event_akad_city,
                maps: sharedData.mapLocation,
                direction_text: data.acco_get_direction_button,
            },

            teapai: {
                event: data.event_teapai_name,
                time: data.event_teapai_time,
                place: data.event_teapai_place,
                address: data.event_teapai_address,
                address_2: data.event_teapai_address_2,
                city: data.event_teapai_city,
                maps: sharedData.mapLocation,
                direction_text: data.acco_get_direction_button,
            },

            reception: {
                event: data.event_reception_name,
                time: data.event_reception_time,
                place: data.event_reception_place,
                address: data.event_reception_address,
                address_2: data.event_reception_address_2,
                city: data.event_reception_city,
                maps: sharedData.mapLocation,
                direction_text: data.acco_get_direction_button,
            },
        },

        gift: {
            title: data.gift_title,
            angpaoText: data.gift_angpao_text,
            giftText: data.gift_gift_text,
            body: data.gift_body,
        },

        message: {
            title: data.message_title,
            subtitle: data.message_subtitle,
            form_config: {
                name_placeholder: data.message_form_name_placeholder,
                message_placeholder: data.message_form_message_placeholder,
                button_text: data.message_form_button_text,
            },
        },

        rsvp: {
            title: data.rsvp_title,
            subtitle: data.rsvp_subtitle,
            form_config: {
                name_label: data.rsvp_form_name_label,
                name_placeholder: data.rsvp_form_name_placeholder,
                phone_label: data.rsvp_form_phone_label,
                phone_placeholder: data.rsvp_form_phone_placeholder,
                registry_label: data.rsvp_form_registry_label,
                registry_radio_label_yes: data.rsvp_form_registry_radio_label_yes,
                registry_radio_label_no: data.rsvp_form_registry_radio_label_no,
                total_attend_label: data.rsvp_form_total_attend_label,
                total_attend_placeholder: data.rsvp_form_total_attend_placeholder,
                button_text: data.rsvp_form_button_text,
                submission_info: data.rsvp_form_submission_info,
            },
        },

        accommodation: {
            title: data.acco_title,
            subtitle: data.acco_subtitle,
            get_direction_button: data.acco_get_direction_button,

            items: data.acco_items,
        },

        teaser: {
            title: data.teaser_title,
            subtitle: data.teaser_subtitle,
        },

        health_protocol: {
            title: data.prokes_title,
            subtitle: data.prokes_subtitle,
            items: [
                {
                    title: data.prokes_1_item_title,
                    subtitle: data.prokes_1_item_subtitle,
                    icon: "/img",
                },
                {
                    title: data.prokes_2_item_title,
                    subtitle: data.prokes_2_item_subtitle,
                    icon: "/img",
                },
                {
                    title: data.prokes_3_item_title,
                    subtitle: data.prokes_3_item_subtitle,
                    icon: "/img",
                },
                {
                    title: data.prokes_4_item_title,
                    subtitle: data.prokes_4_item_subtitle,
                    icon: "/img",
                },
            ],
        },

        credit: {
            header: data.credit_header,
            title: data.credit_title,
            subtitle: data.credit_subtitle,
        },

        toast: {
            success: data.toast_success,
            error: data.toast_error,
            success_rsvp: data.toast_success_rsvp,
            error_rsvp: data.toast_error_rsvp,
            success_send_message: data.toast_success_send_message,
            error_send_message: data.toast_error_send_message,
            error_name_validation: data.toast_error_name_validation,
            error_phone_validation: data.toast_error_phone_validation,
            error_attend_validation: data.toast_error_attend_validation,
            error_attend_number_validation: data.toast_error_attend_number_validation,
            error_message_validation: data.toast_error_message_validation,
        },

        couple: {
            groom: data.groom_label,
            bride: data.bride_label,
        }
    };
};

export default transform;
